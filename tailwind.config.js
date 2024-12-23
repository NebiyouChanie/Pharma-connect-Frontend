/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#286AA7',
        lightbg: '#E9EFFF',
        accent: '#34D399',
        headingText: '#F3F4F6',
        bodyText: '#1F2937',
      },
    },
  },
  plugins: [],
}

