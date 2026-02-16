/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Custom color
        secondary: "#9333EA", // Custom color
      },
      listStyleType: {
        circle: 'circle',
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.1)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        md: '2px 2px 6px rgba(0, 0, 0, 0.15)',
        lg: '3px 3px 8px rgba(0, 0, 0, 0.2)',
        xl: '4px 4px 12px rgba(0, 0, 0, 0.25)',
        '2xl': '5px 5px 15px rgba(0, 0, 0, 0.3)',
        none: 'none',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        popIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        wave: {
          '0%, 60%, 100%': {
            transform: 'scale(1)',
            opacity: '0.5',
          },
          '30%': {
            transform: 'scale(1.4)',
            opacity: '1',
          },
        },
        slideInLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        typing: {
          '0%, 60%, 100%': { 
            transform: 'translateY(0)', 
            opacity: '0.4',
          },
          '30%': { 
            transform: 'translateY(-8px)', 
            opacity: '1',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in',
        slideIn: 'slideIn 0.3s ease-out',
        popIn: 'popIn 0.3s ease-out',
        wave: 'wave 1.4s infinite ease-in-out',
        slideInLeft: 'slideInLeft 0.3s ease-out',
        typing: 'typing 1.4s infinite ease-in-out',
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],
};