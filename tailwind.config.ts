import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0a0a0f',
        body: '#e8e6e1',
        heading: '#ffffff',
        accent: '#c9a84c',
        verified: '#22c55e',
        alleged: '#f59e0b',
        unresolved: '#ef4444'
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif']
      },
      backgroundImage: {
        grain: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
