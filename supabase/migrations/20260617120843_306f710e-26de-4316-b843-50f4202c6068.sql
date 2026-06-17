CREATE TABLE public.consultation_inquiries (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  event_date date,
  guest_count text,
  service_tier text,
  event_type text,
  message text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.consultation_inquiries TO anon;
GRANT INSERT ON public.consultation_inquiries TO authenticated;
GRANT ALL ON public.consultation_inquiries TO service_role;

ALTER TABLE public.consultation_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an inquiry"
ON public.consultation_inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);