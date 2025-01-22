CREATE TABLE decor_recommendations (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL,
  items JSONB NOT NULL,
  budget DECIMAL NOT NULL,
  style TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);