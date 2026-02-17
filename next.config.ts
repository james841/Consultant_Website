/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yxocobzbigmptpzeuodn.supabase.co',   // ← your exact Supabase project domain
        port: '',
        pathname: '/storage/v1/object/public/**',        // ← allow all public objects
      },
      // Optional: allow all Supabase domains if you have multiple projects
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  // ... other config
};

export default nextConfig;