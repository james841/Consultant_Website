import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface BlogPost {
  id: string
  created_at: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  cover_image: string
  published: boolean
  author_email: string
}