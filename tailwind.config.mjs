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
        raspberry50:"var(--raspberry50)", 
        darkcyan:  "var(--darkcyan)",  
      }, 
      fontSize: {
        'xs-custom': '9.7px',
        'lg-custom': '18px',
      }, 
      boxShadow: {
        'custom': '0px 4px 4px rgba(0, 0, 0, 0.25)', // Define the custom shadow
      }, 
      
    }, 
    screens: {
      'sm': '640px',
      'md': '768px', 
      'md-1' :'995px',

      
      'lg': '1024px', 
      'lg-1': '1075px', 
      'lg-2':'1176px',  

      'xl': '1280px',
      '2xl': '1536px',
    },
  },  
  plugins: [],
};
