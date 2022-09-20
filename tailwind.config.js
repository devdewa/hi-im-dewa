const defaultTheme = require('tailwindcss/defaultTheme');
const { zinc } = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './styles/**/*.{js}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gray: zinc,
            },
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
                mono: [
                    'Fira Code',
                    'Dank Mono',
                    ...defaultTheme.fontFamily.mono,
                ],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
