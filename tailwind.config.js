/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#243c5a',
        'dark-1': '#14172B',
        'neutral-1': '#ECF0FF',
        'neutral-2': '#5A5F7D',
        'success': 'hsla(158, 100%, 50%, 1)',
        'error': 'hsla(0, 100%, 65%, 1)'
      },
      padding: {
        DEFAULT: '1rem',
        sm: '.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '5rem',
      },
    },
  },
  plugins: [],
}
