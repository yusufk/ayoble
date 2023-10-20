module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        short: { raw: '(max-height: 650px)' },
        xshort: { raw: '(max-height: 560px)' },
        xxshort: { raw: '(max-height: 490px)' },
      },
      colors: {
        'ayoba_blue': '#146EA6',
        'ayoba_dark_blue': '#034C8C',
        'ayoba_grey': '#F2F2F2',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
