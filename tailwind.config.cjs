/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      body: ["Montserrat"],
      montserratExtrabold: ["Montserrat ExtraBold"],
      italic: ["Montserrat Italic"],
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#1C1E2C",
        },
        blue: {
          primary10: "#0075FF",
          primary20: "#4FA0FF",
        },
        green: {
          primary10: "#0DA800",
          primary20: "#8BD866",
        },
        orange: {
          primary10: "#FF3D00",
          primary20: "#FF7A00",
        },
        purple: {
          primary10: "#7200A8",
          primary20: "#8951CF",
        },
        red: {
          primary10: "#BF002E",
          primary20: "#CF516F",
        }
      },
      animation: {
        floating: 'floating 2s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(-15%)' },
          '50%': { transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: []
};