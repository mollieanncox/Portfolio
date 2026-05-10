/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // New Spirit for headlines — characterful serif with personality
        display: ['"new-spirit"', 'Georgia', 'serif'],
        // Satoshi Variable for body — clean, modern, geometric sans
        sans: ['"Satoshi-Variable"', 'Satoshi', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        // Mono for accents and metadata
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Mollie Cox brand palette
        ink: {
          DEFAULT: '#02101D',
          soft: '#1F2A37',
          muted: '#6B6B5E',
        },
        cream: {
          DEFAULT: '#F4EFE5',
          warm: '#EBE3D2',
          deep: '#DCD2BC',
        },
        orange: {
          DEFAULT: '#E13D0F',
          deep: '#A8290A',
          soft: '#F5806A',
          pale: '#FBB69E',
        },
        purple: {
          DEFAULT: '#9B40C4',
          deep: '#6E2A8E',
          light: '#C896E0',
          pale: '#E5D4F2',
          wash: '#F0E5F8',
        },
        navy: {
          DEFAULT: '#062E5C',
          deep: '#02101D',
        },
        taupe: {
          DEFAULT: '#7A6A4F',
          light: '#A89578',
        },
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4.5rem)', { lineHeight: '1.0', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        'reading': '68ch',
        'wide': '78ch',
      },
    },
  },
  plugins: [],
};
