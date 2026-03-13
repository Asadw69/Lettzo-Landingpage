import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase environment variables are missing. ' +
    'Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env.local file.'
  );
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);

// SQL to create the waitlist table in Supabase:
// CREATE TABLE IF NOT EXISTS public.waitlist (
//   id BIGSERIAL PRIMARY KEY,
//   email TEXT UNIQUE NOT NULL,
//   created_at TIMESTAMPTZ DEFAULT NOW()
// );
// ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;
// CREATE POLICY "Allow inserts" ON public.waitlist FOR INSERT WITH CHECK (true);
