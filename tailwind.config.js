/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily:{
      sans:'Roboto Mono , monospace' 
    },
    extend: {
      animation: {
        loading: 'loading 1s infinite linear',
      },
      keyframes: {
        loading: {
          '20%': {
            'background-position': '0% 0%, 50% 50%, 100% 50%',
          },
          '40%': {
            'background-position': '0% 100%, 50% 0%, 100% 50%',
          },
          '60%': {
            'background-position': '0% 50%, 50% 100%, 100% 0%',
          },
          '80%': {
            'background-position': '0% 50%, 50% 50%, 100% 100%',
          },
        },
      },

      height:{
        screen:'100dvh'
      }

    },

  },
  plugins: [],
}
