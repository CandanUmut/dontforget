import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#08080c',
        surface: '#111118',
        elevated: '#16161f',
        divider: '#1e1e2a',
        body: '#8a8693',
        heading: '#e2dfd8',
        accent: '#c9a227',
        verified: '#16a34a',
        alleged: '#d97706',
        unresolved: '#dc2626'
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        section: ['var(--font-libre)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace']
      }
    }
  },
  plugins: []
};

export default config;
