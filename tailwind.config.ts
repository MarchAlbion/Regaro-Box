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
      animation: {
        'spin-slow': 'spin 3s linear infinite',  
        'spin-slower': 'spin 6s linear infinite', 
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
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
export default config;
