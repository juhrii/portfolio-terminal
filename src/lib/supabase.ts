import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dmtmwbyrctajsnccojb.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtdG13YnlicmN0YWpzbmNjb2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1OTA0MDMsImV4cCI6MjEwMjE2NjQwM30.khPufsn40w08UCTzB2LZHwYdNPFVQjB5cv8m3F1h-8U";

export const supabase = createClient(supabaseUrl, supabaseKey);
