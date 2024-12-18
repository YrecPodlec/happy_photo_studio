import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gradientStart: '#12DC00',
        gradientEnd: '#00FFCC',
        Red1: '#8A0041',
        Red2: '#D50065',
        backModal: '#252525'
      },
      backgroundImage: {
        'greenGradient': 'linear-gradient(to right, #12DC00, #00FFCC)',
      },
      borderRadius:{
        'my': "160px",
        'input': '32px'
      },
      fontSize: {
        4: "0.25rem",
        8: "0.5rem",
        12: "0.75rem",
        16: "1rem",
        24: "1.5rem",
        32: "2rem",
        48: "3rem",
        64: "4rem",
        80: "5rem",
        96: "6rem",
        128: "8rem",
        160: "10rem",
        256: "16rem",
        512: "32rem"
      },
      screens: {
        '2xl': {'max': '2560px'},
        'xl': {'max': '1920px'},
        'l': {'max': '1670px'},
        'm': {'max': '1460px'},
        's': {'max': '1280px'},
        'xs': {'max': '1030px'},
        'xxs': {'max': '960px'},
        'xxxs': {'max': '640px'},
        'xxxxs': {'max': '380px'},
        'xxxxxs': {'max': '340px'},

        '2xl-min': {'min': '2560px'},
      },
      fontFamily: {
        title: ['Ouvality'],
        sans: ['ZangeziSans'],
        serif: ['ZangeziSerif'],
        fancy: ['ZangeziFancy'],
        extra: ['ZangeziItalic']
      },
      letterSpacing: {
        large: '32px',
        medium: '16px',
        small: '8px'
      },
    },
  },
  plugins: [],
};
export default config;
