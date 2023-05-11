/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'hanna': ['BMHANNAPro'],
        'Pretendard': ['Pretendard'],
      },
      colors: {
        'BM-primary': 'var(--BM-primary)',
        'BM-font': 'var(--BM-font)',
        'BM-black': 'var(--BM-black)',
        'BM-secondary': 'var(--BM-secondary)',
        'BM-tertiary': 'var(--BM-tertiary)',
        'BM-white': 'var(--BM-white)',
        'BM-gray200': 'var(--BM-gray200)',
        'BM-line': 'var(--BM-line)',
        'BM-background': 'var(--BM-background)',
      },
      screens: {
        'xs': '375px'
      },
      container :{
        
      }

    },
  },
  plugins: [],
}
