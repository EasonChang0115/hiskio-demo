const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blueGray: {
        4: '#434343',
      },
      black: colors.black,
      white: colors.white,
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#d9d9d9',
        500: '#bfbfbf',
        600: '#8c8c8c',
        700: '#595959',
        800: '#1f2937',
        900: '#111827',
      },
      red: {
        4: '#e25252',
        5: '#eb6767',
        ...colors.red,
      },
      yellow: colors.amber,
      green: {
        1: '#178fac',
        2: '#288FAC',
        3: '#308eac',
        ...colors.emerald,
      },
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    extend: {
      inset: {
        '5%': '5%',
        '-60%': '-60%',
      },
      borderColor: {
        gray: {
          400: '#d9d9d9',
        },
      },
      backgroundColor: {
        'red-1': '#e34a4a',
        'hi-white': '#fafafa',
      },
      textColor: {
        'red-1': '#e34a4a',
        'yellow-3': '#ffa81d',
        'hi-price': '#454545',
      },
      width: {
        '40px': '40px',
        '90%': '90%',
        '95%': '95%',
      },
      minWidth: {
        70: '70px',
      },
      zIndex: {
        3: 3,
        11: 11,
      },
      height: {
        '40px': '40px',
      },
      boxShadow: {
        'lg-plus': '0 5px 20px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);',
        tab: '0px 5px 15px rgba(0,0,0,0.05);',
      },
      screens: {
        md: { max: '768px' },
        'mq-1380': { max: '1380px' },
        'max-sm': { max: '415px' },
        'min-md': { min: '768px' },
        'min-lg': { min: '1024px' },
        'sn-500': { max: '500px' },
        'sn-640': { max: '640px' },
        'sn-1100': { max: '1100px' },
        'sn-1000': { max: '1000px' },
      },
    },
  },
};
