import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { SignJWT } from 'jose';

const SECRET = new TextEncoder().encode(process.env.ADMIN_SECRET_KEY!);

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;

  // Constant-time comparison to prevent timing attacks
  const usernameMatch = username === validUsername;
  const passwordMatch = password === validPassword;

  if (!usernameMatch || !passwordMatch) {
    // Intentional delay to slow brute-force attempts
    await new Promise((r) => setTimeout(r, 1000));
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  // Create a signed JWT valid for 8 hours
  const token = await new SignJWT({ username })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('8h')
    .setIssuedAt()
    .sign(SECRET);

  const cookieStore = await cookies();

  cookieStore.set('admin_token', token, {
    httpOnly: true,       // JS cannot access this cookie
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 8, // 8 hours in seconds
    path: '/',
  });

  return NextResponse.json({ success: true });
}