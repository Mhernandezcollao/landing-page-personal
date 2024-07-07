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
        colorNavbar: "rgba(0, 0, 0, .8)",
        myGreen: "#44F814"
      },
      screens: {
        'media465': '465px',
        // Agregar breakpoints personalizados según sea necesario
      },
    },
  },
  plugins: [],
};
export default config;
