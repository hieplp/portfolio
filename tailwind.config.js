/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    daisyui: {
        themes: [
            "night",
        ]
    },
    theme: {
        extend: {},
    },
    variants: {
        fill: ['hover', 'focus'], // this line does the trick
    },
    plugins: [require("daisyui")],
}

