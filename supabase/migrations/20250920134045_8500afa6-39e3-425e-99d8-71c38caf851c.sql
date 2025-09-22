-- Create demo_requests table for storing demo booking requests
CREATE TABLE public.demo_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  interest TEXT,
  preferred_date DATE,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (but allow public access for demo requests)
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert demo requests (no auth required)
CREATE POLICY "Anyone can submit demo requests" 
ON public.demo_requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading demo requests (for admin purposes later)
CREATE POLICY "Demo requests are viewable" 
ON public.demo_requests 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_demo_requests_updated_at
  BEFORE UPDATE ON public.demo_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();