module.exports = {
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    prefix: 'daisy-',
    themes: [
      {
        eggp: {
          "primary": "#95f4de",
          "secondary": "#e1f73b",
          "accent": "#f7c3a5",
          "neutral": "#24292e",
          "base-100": "#1b1237",
          "base-content": "#ffffff",
          "info": "#799ce7",
          "success": "#115a38",
          "warning": "#ca6b0c",
          "error": "#f46679",
        },
      },
    ]
  },
}
