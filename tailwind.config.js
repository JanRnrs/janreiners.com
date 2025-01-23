/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
    content: ['./src/**/*.{vue,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                mainColor: colors.slate
            }
        },
        plugins: []
    }
};
