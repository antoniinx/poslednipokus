import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#4285F4',
        pink: '#EA4C89',
        purple: '#8A2BE2',
        red: '#FF0000',
        orange: '#FF8C00',
        yellow: '#FFD700',
        green: '#00C853',
      },
      spacing: {
        '25': '6.25rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}

export default config 