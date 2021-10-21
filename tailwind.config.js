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
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#595959',
        800: '#1f2937',
        900: '#111827',
      },
      red: {
        5: '#eb6767',
        ...colors.red,
      },
      yellow: colors.amber,
      green: {
        1: '#178fac',
        3: '#308eac',
        ...colors.emerald,
      },
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    extend: {
      borderColor: {
        gray: {
          400: '#d9d9d9',
        },
      },
      backgroundColor: {
        'hi-white': '#fafafa',
      },
      textColor: {
        'hi-price': '#454545',
      },
      screens: {
        'min-lg': { min: '1024px' },
        'sn-500': { max: '500px' },
      },
    },
  },
};
