/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",  // ✅ Fixed: Added missing `}`
    ],
    theme: {
      extend: {
        colors: {
          primary: "#5F6FFF", // ✅ Your custom color
        },

        gridTemplateColumns:{
          'auto':'repeat(auto-fill, minmax(200px, 1fr))'
        }
      },
    },
    plugins: [],
  };
  

