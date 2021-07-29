module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: '32rem',
    },
    },
    theme: {
      colors: {
        bg: "bg-blue-900",
        highlightBGFocused: "00296B",
        highlightbg: "003F88",
        text: "FDC500",
      },
      

    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
  themes: [
  {
    'mytheme': {
      'bg' : '00509D',
      'highlightBGFocused' : '00296B',
      'highlightbg' : '003F88',
      'text' : 'FDC500',
    },
  }
  ]
}
