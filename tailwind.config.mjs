/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)", 
        raspberry:  "var(--raspberry)", 
        darkcyan:  "var(--darkcyan)",  
      }, 
      fontSize: {
        'xs-custom': '9.7px',
        'lg-custom': '18px',
      },
    },
  },
  plugins: [],
};
