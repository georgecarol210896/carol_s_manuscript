/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        parchment: '#FCF9F2',
        surface: '#FFFDF9',
        primary: '#2B2B2B',
        secondary: '#6B5E53',
        border: '#D8CFC4',
        gold: '#C5A46D',
        byzantine: '#8B3A3A',
        olive: '#7A8468',
        liturgical: '#5E4B7A',
        teal: '#2E5A5A',
        slate: '#516B84',
        copper: '#B56A45',
      },
      fontFamily: {
        heading: ['Crimson Pro', 'serif'],
        body: ['Inter', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace'],
        accent: ['Caveat', 'cursive'],
      },
      maxWidth: {
        reading: '680px',
      },
    },
  },
  plugins: [],
};
