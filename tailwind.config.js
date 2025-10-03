/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'burgundy': '#8B2635',
        'burgundy-dark': '#6B1F2A',
        'burgundy-50': '#FFF5F7',
        'navy': '#2C3E50',
        'navy-dark': '#1A2332',
        'forest': '#2E5F3E',
        'forest-light': '#4A7D5E',
        'mustard': '#D4A017',
        'mustard-light': '#E4B22B',
        'asfalizo-gray': '#F3F4F6',
      },
      animation: {
        'gradient': 'gradient-shift 3s ease infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}