/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#f97316',
        graphite: '#1f2937',
      },
    },
  },
  plugins: [],
};
