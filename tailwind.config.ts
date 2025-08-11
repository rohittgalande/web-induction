import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'], // override default
        heading: ['"Poppins"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
};

export default config;
