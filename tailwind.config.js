/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
    darkMode: "class", // opcional
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: "#121212",
                    light: "#1e1e1e",
                    lighter: "#2a2a2a",
                },
                primary: {
                    DEFAULT: "#2af4b8",
                    dark: "#24c49e",
                    light: "#7ff9d0",
                },
                neutral: {
                    DEFAULT: "#f5f5f5",
                    muted: "#b0b0b0",
                },
            },
        },
    },
    plugins: [],
}
