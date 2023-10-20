/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      textColor: { gold: '#e7cd80', darkgold: '#4c3d19' },
      borderColor: { gold: '#e7cd80', darkgold: '#4c3d19' },
      colors: { gold: '#e7cd80', darkgold: '#4c3d19' },
    }
  },
  plugins: [require('daisyui'), require('prettier-plugin-tailwindcss')]
}
