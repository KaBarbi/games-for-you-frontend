/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: "#121212", // Fundo principal
                    light: "#1e1e1e", // Fundo secundário / input
                    lighter: "#2a2a2a", // Borda ou hover leve
                },
                primary: {
                    DEFAULT: "#2af4b8", // Detalhes e destaques
                    dark: "#24c49e", // Hover
                    light: "#7ff9d0", // Backgrounds sutis, se necessário
                },
                neutral: {
                    DEFAULT: "#f5f5f5", // Textos claros
                    muted: "#b0b0b0", // Textos secundários
                },
            },
        },
    },
    plugins: [],
}
