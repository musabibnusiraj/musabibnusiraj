/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          DEFAULT: '#0b61ff',
          600: '#0a58e6',
          50: '#eff6ff',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e6f3ff',
          600: '#0b61ff'
        }
      },
      boxShadow: {
        card: '0 8px 30px rgba(2,6,23,0.08)'
      }
    },
  },
  plugins: [],
};
