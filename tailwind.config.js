/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'darkBlack': '#202020',
        'alterBlack': '#2E2E2E',
        'black': '#333333',
        'gray': '#6B6F7B',
        'lightGray': '#F4F7FF',
        'smokeyGray': '#EAEAEA',
        'blue': '#2B67F6',
        'green': '#27AE60',
        'purple': '#9424c3',
        'orange': '#ff9d35',
        'pink': '#fb73ff',
        'lightblue': '#63f1ff'
      },
      boxShadow: {
        'normal': '0px 4px 30px 0px rgba(0, 0, 0, 0.08)',
        'inverted': '0px 4px 30px 0px rgba(255, 255, 255, 0.08)',
      }
    },
    screens: {
            xl: { max: "1279px" },

            lg: { max: "1023px" },

            md: { max: "799px" },

            sm: { max: "601px" },
        },
  },
  darkMode: 'class',
  plugins: [],
}

