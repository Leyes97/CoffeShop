/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/commons/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'darkCyan': '#0E8784',
        'darkGreyBlue':'#333D4B',
        'paleOrange':'#FDD6BA',
        'lightCream': '#FEFCF7',
        'Grey':'#83888F',
        'CyanWhite':'#66D2CF',
        'DisableButton':'#E2DEDB',
      },
      fontFamily:{
        'barlow':['Barlow'],
        'fraunces':['Fraunces']
      }
    },
  },
  plugins: [],
}
