// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://snlktvpzrkcpsphyrlbu.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNubGt0dnB6cmtjcHNwaHlybGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwNjAxMjIsImV4cCI6MjA3NTYzNjEyMn0.0BIYXjy6AOaV0BtA9iEMvpRb7IhibNZGvNSIownIbMI'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
