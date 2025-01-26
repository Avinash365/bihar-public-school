// In 'pages/_layout.js' (or wherever you have the RootLayout)

import Footer from '@/components/footer/Footer';
import Navbar from '../components/Navbar/Navbar';  // Make sure the path is correct

import '../style/globals.css';  // Make sure the path to globals.css is correct

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Head elements (title, meta tags, etc.) */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* You can add additional head elements here if needed */}
      </head>
      <body>
        {/* Navbar component */}
        <Navbar />
        {/* Render the children components passed to RootLayout */}
        {children} 
        <Footer/>
      </body>
    </html>
  );
}

