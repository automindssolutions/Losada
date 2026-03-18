/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'void': '#0A0A14',
        'plasma': '#7B61FF',
        'phantom': '#F0EFF4',
        'graphite': '#18181B',
      },
      fontFamily: {
        'sora': ['"Sora"', 'sans-serif'],
        'instrument-serif': ['"Instrument Serif"', 'serif'],
        'fira-code': ['"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'neon-glow': 'radial-gradient(circle at center, rgba(123, 97, 255, 0.15) 0%, rgba(10, 10, 20, 0) 50%)',
      }
    },
  },
  plugins: [],
}
