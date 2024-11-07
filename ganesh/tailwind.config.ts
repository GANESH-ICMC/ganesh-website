import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#2E2C2F',
        foreground: '#475B63',
        light: '#F3E8EE',
        primary: '#40dda5',
        secondary: '#e02862',
        buttonHover: '#40dda5',
        terminal: '#00ff00',
        adminBackground: '#171821',
        adminForeground: '#21222D',
      },
      fontFamily: {
        sans: ['"Inter var"', 'Inter', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
        header: ['"Playfair Display"', 'serif'],
        body: ['"Lora"', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
