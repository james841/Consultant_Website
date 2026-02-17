import { createClient } from '@/lib/supabase-server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') ?? '/admin/dashboard'

  if (!code) {
    return NextResponse.redirect(new URL('/admin/login?error=no_code', requestUrl.origin))
  }

  try {
    const supabase = await createClient()
    
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (error) {
      return NextResponse.redirect(new URL('/admin/login?error=auth_failed', requestUrl.origin))
    }

    // Check if the user's email matches the admin email
    const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL
    if (data.session?.user?.email !== adminEmail) {
      await supabase.auth.signOut()
      return NextResponse.redirect(new URL('/admin/login?error=unauthorized', requestUrl.origin))
    }

    return NextResponse.redirect(new URL(next, requestUrl.origin))
    
  } catch (err) {
    return NextResponse.redirect(new URL('/admin/login?error=server_error', requestUrl.origin))
  }
}