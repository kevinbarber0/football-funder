/** @type {import('tailwindcss').Config} */

export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  screens: {
    'vs': '375px',
    'ns': '431px',
    'xs': '530px',
    '2xs': '590px',
    'sm': '640px',
    'md': '768px',
    'mm': '850px',
    'xm':  '950px',
    'lg': '1024px',
    'bl': '1100px',
    'xl': '1280px',
    '2xl': '1536px',
  },
  fontFamily: {
    sans: ['General Sans', 'sans-serif'],
  },
  container: {
    center: true,
  },
  extend: {
    transitionDuration: {
      '1000': '1000ms',
      '3000':'3000ms',
        '5000': '5000ms',
      },
    maxWidth: {
      100: '430px',
    },
    padding: {
      15: '15px',
      30: '30px',
      31: '31px',
      42: '42px',
    },
    margin: {
      15: '15px',
      18: '18px',
      30: '30px',
      100: '100px',
      120: '120px',
    },
    gap: {
      15:'15px',
      30:'30px'
    },
    borderRadius: {
      10: '10px',
      20: '20px',
      30: '30px',
      50: '50%'
    },
    colors: {
      green: {
        10: '#78E98C',
        20: '#0F2110',
        30: '#19301A',
        40: '#122413',
        50: '#9BF39F',
        70: '#061807',
        80: '#122413',
      },
      gray: {
        10: '#737373',
        20: '#F0F4EF',
        30: '#EAEAEA',
      },
      dark: '#242731',
      shark: '#1B1D21',
      bombay: '#B2B3BD',
      alabaster: '#F7F7F7',
      flowerblue: '#5274EE',
    },
  },
};
export const plugins = [];
