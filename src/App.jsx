import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import BudgetForm from './components/BudgetForm';
import DecorRecommendations from './components/DecorRecommendations';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [session, setSession] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleRecommendations = async (budget, style) => {
    try {
      setLoading(true);
      setError('');
      
      const { data: { session } } = await supabase.auth.getSession();
      
      const response = await fetch('/api/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ budget, style }),
      });

      if (!response.ok) throw new Error('Failed to get recommendations');
      
      const data = await response.json();
      setRecommendations(data);
    } catch (err) {
      console.error('Recommendation error:', err);
      setError('Failed to get recommendations. Please try again.');
      Sentry.captureException(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar session={session} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {!session ? (
          <Auth />
        ) : (
          <>
            <BudgetForm 
              onSubmit={handleRecommendations} 
              loading={loading} 
            />
            
            {error && (
              <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            <DecorRecommendations 
              items={recommendations} 
              loading={loading} 
            />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;