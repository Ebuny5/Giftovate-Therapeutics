CREATE TABLE public.customer_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  email text,
  location text,
  interest text NOT NULL,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.customer_enquiries TO service_role;
ALTER TABLE public.customer_enquiries ENABLE ROW LEVEL SECURITY;