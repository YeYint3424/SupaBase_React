import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKEY = process.env.REACT_APP_ANON_KEY;


const supabaseUrl ='https://kxnehzksglbndlizgstr.supabase.co';
const supabaseKEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4bmVoemtzZ2xibmRsaXpnc3RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3MjYwNTQsImV4cCI6MjAxNDMwMjA1NH0.FmAoQcSa9_kY8T8k22nLhNoK3CKCk0NUD1cTGP2LSE4';
const supabase = createClient(supabaseUrl, supabaseKEY);

export default supabase;
