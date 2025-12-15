import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marina: "#74b5df",
        lava: "#ff2600",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
