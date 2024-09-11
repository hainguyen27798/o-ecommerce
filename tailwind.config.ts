import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            title: ['"Geist"'],
            sans: ['"GeistMono"'],
        },
        extend: {
            colors: {},
            backgroundImage: {
                banner: 'url("/banner.jpg")',
            },
        },
    },
    corePlugins: {
        container: false,
    },
    important: 'html',
    plugins: [
        function ({ addComponents }: any) {
            addComponents({
                '.container': {
                    width: '100%',
                    '@screen sm': {
                        maxWidth: '640px',
                    },
                    '@screen md': {
                        maxWidth: '768px',
                    },
                    '@screen lg': {
                        maxWidth: '1024px',
                    },
                    '@screen xl': {
                        maxWidth: '1280px',
                    },
                },
            });
        },
    ],
};
export default config;
