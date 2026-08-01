import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // ---- black ramp ----
        ink:     '#050506',   // page base
        carbon:  '#0B0B0D',   // sections
        onyx:    '#121215',   // cards / surfaces
        graphite:'#1C1C21',   // borders on dark surfaces
        // ---- gold ramp ----
        gold: {
          50:  '#FDF8E9',
          100: '#F7EDCB',
          200: '#F0DFA8',
          300: '#E5CB7C',
          400: '#D9B959',
          500: '#C9A227',   // core brand gold
          600: '#A8842A',
          700: '#7E6320',
          800: '#544216',
          900: '#2E240C',
        },
        bone: '#EFEBE2',
        ash:  '#8C877E',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Didot', 'Georgia', 'serif'],
        sans:    ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        label: '0.32em',
        wider2: '0.18em',
      },
      backgroundImage: {
        'gold-leaf':
          'linear-gradient(160deg,#F7EDCB 0%,#D9B959 26%,#C9A227 48%,#7E6320 68%,#E5CB7C 88%,#F0DFA8 100%)',
        'gold-line':
          'linear-gradient(90deg,transparent,#C9A227 35%,#F0DFA8 50%,#C9A227 65%,transparent)',
      },
      keyframes: {
        rise:   { '0%': { transform: 'translateY(110%)' }, '100%': { transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        float:  { '0%,100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(-22px) rotate(8deg)' } },
        marquee:{ '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        shimmer:{ '0%': { backgroundPosition: '200% 0' }, '100%': { backgroundPosition: '-200% 0' } },
        pulseDot: { '0%,100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '.3', transform: 'scale(.65)' } },
        wheelSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wheelSpinRev: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        dealIn: {
          '0%': { opacity: '0', transform: 'translateY(40px) rotate(-18deg) scale(.85)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(var(--deal-rot, 0deg)) scale(1)' },
        },
        neonPulse: {
          '0%,100%': { opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(201,162,39,.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 22px rgba(240,223,168,.85))' },
        },
        ballOrbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rise:    'rise 1.1s cubic-bezier(.16,1,.3,1) forwards',
        fadeIn:  'fadeIn .9s ease forwards',
        float:   'float 9s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        shimmer: 'shimmer 6s linear infinite',
        pulseDot:'pulseDot 2.2s ease-in-out infinite',
        wheelSpin: 'wheelSpin 28s linear infinite',
        wheelSpinRev: 'wheelSpinRev 48s linear infinite',
        dealIn:  'dealIn .9s cubic-bezier(.16,1,.3,1) forwards',
        neonPulse: 'neonPulse 3.2s ease-in-out infinite',
        ballOrbit: 'ballOrbit 9s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
