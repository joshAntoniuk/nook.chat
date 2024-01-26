import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        white: '#f8f8f8',
        black: '#1e1e1e',
        green: '#6CB592'
      },
      fontFamily: {
        'humane-bold': ['humane-bold', 'sans-serif'],
        'humane-regular': ['humane-regular', 'sans-serif'],
        'bebas-neue': ['bebas-neue', 'sans-serif']
      }
    }
  },
  plugins: []
};
export default config;
