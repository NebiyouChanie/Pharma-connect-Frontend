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
        // greenlightbg: '#E9FFEE',
        accent: '#34D399',
        headingText: '#F3F4F6',
        bodyText: '#808080',
      },
      container: {
        center: true, // Centers the container
        padding: {
          DEFAULT: '1rem', // Default padding for all screen sizes
          sm: '2rem', // Padding for small screens
          lg: '4rem', // Padding for large screens
          xl: '5rem', // Padding for extra-large screens
          '2xl': '6rem', // Padding for 2xl screens
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px', // Customize breakpoints if needed
        },
      },
    },
  },
  plugins: [],
}

