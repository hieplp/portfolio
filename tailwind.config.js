/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    daisyui: {
        themes: [
            {
                'night': {
                    ...require("daisyui/src/theming/themes")["[data-theme=night]"],
                    "primary": "#133047",
                    "secondary": "#93c5fd",
                }
            },
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

