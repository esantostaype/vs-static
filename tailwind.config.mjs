import animations from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        accent: '#00c864'
      },
      fontFamily: {
        sans: ['Inter'],
      },
    },
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [animations],
};