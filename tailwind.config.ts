import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#111827",
      },
      boxShadow: {
        '3xl': '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
        '4xl': '0 30px 60px -15px rgba(0, 0, 0, 0.5)',
        '5xl': '0 40px 80px -20px rgba(0, 0, 0, 0.55)',
        '6xl': '0 50px 100px -25px rgba(0, 0, 0, 0.6)',
        '7xl': '0 60px 120px -30px rgba(0, 0, 0, 0.65)',
        '8xl': '0 70px 140px -35px rgba(0, 0, 0, 0.7)',
        '9xl': '0 80px 160px -40px rgba(0, 0, 0, 0.75)',
        '10xl': '0 100px 200px -50px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-slower": "spin 6s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "create-build": 'url("/BuildCreator.png")',
        shoes: 'url("/Shoes.png")',
        body: 'url("/Body.png")',
        head: 'url("/Head.png")',
        left: 'url("/LeftHand.png")',
        right: 'url("/RightHand.png")',
        potion: 'url("/Potion.png")',
        food: 'url("/Food.png")',
        cape: 'url("/Cape.png")',
        ring: 'url("/Ring.png")',
        albion: 'url("/AlbionBack.png")',
        caerleon: 'url("/caerleon.jpg")',
        char: 'url("/Char.png")',
        house: 'url("/albionHouse.jpg")',
        gradientWhite: 'url("/whiteGrad.jpg")',
        gardientDark: 'url("/darkGrad.jpg")',
        gradientBlack: 'url("/blackGradient.png")',
        donate: 'url("/Donate.png")',
        youtube: 'url("/YouTube.png")',
        playAlbion: 'url("/PlayAlbion.png")',
        discord: 'url("/Discord.png")',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
