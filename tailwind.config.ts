import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: ["Oswald"],
      body: ["Oswald"],
    },
    extend: {
      colors: {
        "brand-light-blue": "#114467",
        "brand-dark-blue": "#11212E",
        "brand-blue": "#012237",
        "brand-orange": "#F16101",
        "brand-light-orange": "#F7760E",
        "brand-dark-orange": "#F5490D",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
};
export default config;
