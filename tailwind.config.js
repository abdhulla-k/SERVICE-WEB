/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Learning-platform palette. Warm paper + ink, amber for the lesson,
        // blue for the learner's question and its generated answer.
        nl: {
          paper: '#f6f4ef',
          surface: '#fdfcf9',
          ink: '#1b1a17',
          muted: '#6b685f',
          faint: '#8a867c',
          line: '#e6e2d8',
          stage: '#151513',
          stage2: '#232320',
          amber: '#e98b3a',
          'amber-dark': '#9a5114',
          'amber-soft': '#fbebdc',
          blue: '#5b9fef',
          'blue-ink': '#10233a',
          'blue-soft': '#8fbdf3',
          'blue-deep': '#1f4f86',
          'blue-tint': '#dce8f7'
        },
        // Green brand palette (emerald-forward)
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
        // Learning-platform type stack
        nl: ['"Instrument Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        'nl-display': ['"Bricolage Grotesque"', '"Arial Narrow"', 'Arial', 'sans-serif'],
        'nl-mono': ['"JetBrains Mono"', 'Menlo', 'Consolas', 'monospace']
      },
      // Numeric weight utilities (font-500 / font-600 / font-700) used across the site.
      fontWeight: {
        500: '500',
        600: '600',
        700: '700'
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(16, 185, 129, 0.45)',
        'card': '0 10px 30px -12px rgba(6, 78, 59, 0.25)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
