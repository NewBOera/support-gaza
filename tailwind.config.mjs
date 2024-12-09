/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        color: '#example',
      },
      fontFamily: {
        Epilogue: ['Epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
