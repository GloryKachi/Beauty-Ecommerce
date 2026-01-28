/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                banner: '#e8f05f',
                'banner-text': '#000000',
                background: '#ffffff',
                foreground: '#000000',
                card: '#f5f5f5',
                badge: '#000000',
                'badge-foreground': '#ffffff',
                'muted-foreground': '#6b7280',
            },
            animation: {
                marquee: 'marquee 30s linear infinite',
            },
            keyframes: {
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
};