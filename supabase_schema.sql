-- 1. Create Profiles table (safe mode)
CREATE TABLE IF NOT EXISTS public.profiles (
      id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
      full_name TEXT,
      role TEXT DEFAULT 'employee',
      biometric_linked BOOLEAN DEFAULT false,
      created_at TIMESTAMPTZ DEFAULT NOW()
);
-- 2. Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
-- 3. Detailed Policies
DO $$ BEGIN IF NOT EXISTS (
      SELECT 1
      FROM pg_policies
      WHERE policyname = 'Enable insert for authenticated users only'
) THEN CREATE POLICY "Enable insert for authenticated users only" ON public.profiles FOR
INSERT WITH CHECK (auth.uid() = id);
END IF;
IF NOT EXISTS (
      SELECT 1
      FROM pg_policies
      WHERE policyname = 'Public profiles are viewable by everyone'
) THEN CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR
SELECT USING (true);
END IF;
IF NOT EXISTS (
      SELECT 1
      FROM pg_policies
      WHERE policyname = 'Users can update own profile'
) THEN CREATE POLICY "Users can update own profile" ON public.profiles FOR
UPDATE USING (auth.uid() = id);
END IF;
END $$;
-- 4. Automatic Profile Trigger (The "Supabase Way")
-- This function runs every time a new user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user() RETURNS trigger AS $$ BEGIN
INSERT INTO public.profiles (id, full_name, role)
VALUES (
            new.id,
            new.raw_user_meta_data->>'full_name',
            'admin'
      );
RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
-- Trigger to call the function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER
INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();