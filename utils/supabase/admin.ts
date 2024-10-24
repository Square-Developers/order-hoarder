import { createClient } from '@supabase/supabase-js'

export default function createAdminClient() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!,
    {
    auth: {
        autoRefreshToken: false,
        persistSession: false
        }
    }
  )

  return supabase
}