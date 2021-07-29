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
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
  },
  themes: [
  {
  }
  ]
}
