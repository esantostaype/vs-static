import animations from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif']
            }
        }
    },
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    plugins: [
        animations
    ],
}