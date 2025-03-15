/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'accent-color': 'var(--accent-color)',
        'background-color': 'var(--background-color)',
        'light-background': 'var(--light-bg-color)',
        'text-color': 'var(--text-color)',
        'light-text': 'var(--light-text-color)',
        'border-color': 'var(--border-color)',
      },
    },
  },
  plugins: [],
} 