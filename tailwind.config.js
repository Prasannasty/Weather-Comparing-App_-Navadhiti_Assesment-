/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9', // Sky blue
        secondary: '#f3f4f6', // Light gray
        accent: '#f59e0b', // Amber
        danger: '#ef4444', // Red
        dark: '#1f2937', // Dark gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use Inter for modern typography
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for cards
      },
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  plugins: [],
};

