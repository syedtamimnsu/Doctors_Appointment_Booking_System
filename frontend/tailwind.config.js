// /** @type {import('tailwindcss').Config} */

// export default{
//     content: [
//         "./index.html",
//         "./src/**/*.{js,ts,jsx,tsx",
//     ],

//     theme: {
//         extend: {
//             colors: {
//                 'primary':"#5f6FFF"
//             }
//         },
//     },

//     plugins: [],
// }


/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",  // 🛠️ FIXED: Closing curly brace added
    ],
    theme: {
      extend: {
        colors: {
          primary: "#5f6FFF",
        },
      },
    },
    plugins: [],
  };
  