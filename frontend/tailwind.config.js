/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",  // ✅ Fixed: Added missing `}`
    ],
    theme: {
      extend: {
        colors: {
          primary: "#5f6FFF", // ✅ Your custom color
        },
      },
    },
    plugins: [],
  };
  

