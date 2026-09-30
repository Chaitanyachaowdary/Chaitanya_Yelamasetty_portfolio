/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Every token resolves to a CSS variable so the whole palette can flip
        // between themes at runtime. Values live in src/index.css under :root
        // (dark) and [data-theme="light"].
        primary: "rgb(var(--c-primary) / <alpha-value>)",
        secondary: "rgb(var(--c-secondary) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        accent: "rgb(var(--c-accent) / <alpha-value>)",
        "accent-hover": "rgb(var(--c-accent-hover) / <alpha-value>)",
        "light-gray": "rgb(var(--c-text) / <alpha-value>)",
        "medium-gray": "rgb(var(--c-muted) / <alpha-value>)",
        dark: "rgb(var(--c-dark) / <alpha-value>)",
        // Semantic replacements for the hardcoded white/black utilities, which
        // could not flip: a hairline border and a faint raised fill.
        line: "rgb(var(--c-line) / <alpha-value>)",
        elevated: "rgb(var(--c-elevated) / <alpha-value>)",
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