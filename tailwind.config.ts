import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#E99FAC',
      secondary: '#0897AA',
      tertiary: '#EDF4F6',
      background: '#F5DBEC',
      grey: '#595959',
      black: '#000000',
      white: '#FFFFFF',
    },

    extend: {
      width: {
        letter: '57.25rem',
      },
    },
  },
  plugins: [require('@designbycode/tailwindcss-text-stroke')],
};
export default config;
