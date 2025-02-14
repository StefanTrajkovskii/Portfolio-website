tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'bubblegum': ['"Bubblegum Sans"', 'cursive'],
                'poppins': ['Poppins', 'sans-serif'],
            },
            animation: {
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                    '100%': { transform: 'translateY(0px)' },
                }
            }
        },
    },
}
