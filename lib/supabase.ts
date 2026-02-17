import { createBrowserClient } from '@supabase/ssr'

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

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