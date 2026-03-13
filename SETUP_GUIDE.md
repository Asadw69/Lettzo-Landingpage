# Lettzo Redesign: Supabase & Deployment Guide

## 1. Supabase Setup

To enable the waitlist functionality, run the following SQL in your Supabase SQL Editor:

```sql
-- Create the waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anyone to insert their email (Waitlist)
-- but prevent anyone from reading/editing the emails for security.
CREATE POLICY "Allow public inserts" 
ON public.waitlist 
FOR INSERT 
WITH CHECK (true);
```

## 2. Environment Variables

Create a `.env.local` file in your project root:

```bash
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

## 3. Deployment Instructions

### Local Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```

### Deploying to Vercel/Netlify
1. Push your code to a GitHub repository.
2. Connect the repository to Vercel or Netlify.
3. **Important**: Add the `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as Environment Variables in the provider's dashboard.
4. Set the build command to `npm run build` and output directory to `dist`.
