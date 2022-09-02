/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './public/**/*.html', './src/**/*.{vue,jsx,ts,js}'],
  theme: {
    extend: {
      colors: {
        bodyColor: 'var(--body-color)',
        firstColor: 'var(--first-color)',
        altFirstColor: 'var(--alt-first-color)',
        txtColor: 'var(--txt-color)',
        btnTxtColor: 'var(--btn-txt-color)'
      },
      screens: {
        xs: '500px',
        '2xs': '300px'
      }
    }
  },
  plugins: []
}
