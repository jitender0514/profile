import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://https://wdjsmueawmcvsouvxivh.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkanNtdWVhd21jdnNvdXZ4aXZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MzMwMTQsImV4cCI6MjA0NDQwOTAxNH0.5RhCQ-vIDc9WXoKONiEUcLkxH1NeGiFCMJw7A3hF3gU");

export default supabase;