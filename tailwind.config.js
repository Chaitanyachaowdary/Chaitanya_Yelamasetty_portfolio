/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b1120", // deepened slate for a premium near-black
        secondary: "#161e2e",
        "surface": "#1c2638",
        accent: "#38bdf8", // Sky 400
        "accent-hover": "#0ea5e9", // Sky 500
        "light-gray": "#f1f5f9", // Slate 100
        "medium-gray": "#94a3b8", // Slate 400
        dark: "#020617", // Slate 950
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}