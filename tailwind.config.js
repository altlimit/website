/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'neutral': '#353638',
        'neutral-strong': '#222325',
        'neutral-medium': '#5C5D5F',
        'neutral-subtle': '#B5B6B8',
        'neutral-inverse': '#F2F3F5',
        'primary': '#1AA1E1',
        'primary-strong' : '#0E95D5',
        'primary-medium' : '#30B7F7',
        'primary-subtle' : '#4FD6FB',
        'primary-inverse' : '#EBFDFD',
        'highlight' : '#CE5043',
        'highlight-strong' : '#B23427',
        'highlight-medium' : '#F6786B',
        'highlight-subtle' : '#FFA396',
        'highlight-inverse' : '#FFC9BC',
        'accent' : '#EDB954',
        'accent-strong' : '#D6A03E',
        'accent-medium' : '#FFD977',
        'accent-subtle' : '#FFF08E',
        'accent-inverse' : '#FFFFCA',
        'success' : '#B3C833',
        'success-strong' : '#859A05',
        'success-medium' : '#C6DB46',
        'success-subtle' : '#E6FB66',
        'success-inverse' : '#FFFFB0',
        'danger' : '#CE5043',
        'danger-strong' : '#B23427',
        'danger-medium' : '#F6786B',
        'danger-subtle' : '#FFA396',
        'danger-inverse' : '#FFC9BC',
        'warning' : '#EDB954',
        'warning-strong' : '#D6A03E',
        'warning-medium' : '#FFD977',
        'warning-subtle' : '#FFF08E',
        'warning-inverse' : '#FFFFCA',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
