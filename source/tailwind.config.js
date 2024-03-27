const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,twig}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: () => ({
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      serif: ['PT Serif', ...defaultTheme.fontFamily.serif],
      montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
    }),
    extend: {
      colors: (theme) => {
        const brand = {
          turquoise: 'hsl(191, 100%, 31%)',
          cornflower: 'hsl(195, 52%, 84%)',
          moss: 'hsl(95 35% 47%)',
          marigold: 'hsl(53, 100%, 48%)',
          parchment: 'hsl(42, 100%, 90%)',
          peacock: 'hsl(191, 100%, 29%)',
          midnight: 'hsl(208, 30%, 21%)',
          sky: 'hsl(195, 32%, 93%)',
        }

        return {
          brand,
          primary: {
            800: brand.turquoise, // 'hsl(191, 100%, 31%)', // brand: turquoise
            500: brand.turquoise, // 'hsl(191, 100%, 31%)', // brand: turquoise
            300: brand.cornflower, // 'hsl(195, 52%, 84%)', // brand: cornflower
          },
          secondary: {
            500: 'hsl(41, 100%, 48%)',
          },
          neutral: {
            900: 'hsl(0, 0%, 44%)',
            500: 'hsl(0, 3%, 63%)',
            200: 'hsl(180, 5%, 96%)',
          },
          blue: {
            600: brand.turquoise,
          },
        }
      },
      aspectRatio: (theme) => ({
        18: '18',
        21: '21',
      }),
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',

        cards: 'repeat(auto-fill, minmax(350px, 1fr))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
