import { authenticateUser } from './_apiUtils.js';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'backend',
      projectId: process.env.VITE_PUBLIC_APP_ID
    }
  }
});

export default async function handler(req, res) {
  try {
    const user = await authenticateUser(req);
    const { budget, style } = req.body;

    if (!budget || !style) {
      return res.status(400).json({ error: 'Missing budget or style parameters' });
    }

    // Generate recommendations using AI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{
          role: "user",
          content: `Generate 5 budget-friendly home decor recommendations for a ${style} style student apartment with $${budget} total budget. 
          Return JSON array with objects containing: name, category, cost, description. Total cost sum must equal ${budget}.`
        }],
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) throw new Error('AI request failed');
    
    const data = await response.json();
    const recommendations = JSON.parse(data.choices[0].message.content).items;

    // Store in database
    const client = postgres(process.env.COCKROACH_DB_URL);
    const db = drizzle(client);

    await db.insert({
      user_id: user.id,
      items: recommendations,
      budget,
      style
    }).into('decor_recommendations');

    res.status(200).json(recommendations);
  } catch (error) {
    console.error('API Error:', error);
    Sentry.captureException(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}