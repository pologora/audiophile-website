import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-dark': '#000000',
        'text-light': '#fff',
        'bg-dark': '#101010',
        'bg-light-primary': '#fafafa',
        'bg-light-secondary': '#f1f1f1',
        'bg-accent': '#D87D4A',
        'bg-accent-hover': '#FBAF85',
      },
    },
  },
  plugins: [],
};
export default config;
