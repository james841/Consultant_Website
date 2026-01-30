import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      colors: {
        'teal-deep': '#0F4C5C',
        'sage-soft': '#9BC1BC',
        'sand-warm': '#F4F1DE',
        'coral-muted': '#E07A5F',
        'gray-charcoal': '#2F3E46',
      },
    },
  },
  plugins: [],
};

export default config;