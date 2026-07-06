/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Distinctive palette — warm "molten amber" primary + cool teal secondary.
        // Deliberately avoids default Tailwind blue/gray.
        accent: {
          DEFAULT: '#F5A524', // molten amber
          soft: '#FFC65C',
          deep: '#C97E12',
        },
        teal2: {
          DEFAULT: '#2DD4BF', // secondary cool highlight
          deep: '#0E9384',
        },
        ink: {
          950: '#0A0B0D', // near-black canvas (dark mode base)
          900: '#101216',
          850: '#161A20',
          800: '#1C2129',
          700: '#2A313C',
        },
        paper: {
          50: '#FBFAF7', // warm off-white (light mode base)
          100: '#F4F2EC',
          200: '#E7E3D8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(245,165,36,0.25), 0 8px 40px -12px rgba(245,165,36,0.35)',
        card: '0 1px 2px rgba(0,0,0,0.06), 0 12px 40px -18px rgba(0,0,0,0.35)',
      },
      keyframes: {
        'gradient-pan': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '80%,100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.2,0.6,0.4,1) infinite',
      },
    },
  },
  plugins: [],
}
