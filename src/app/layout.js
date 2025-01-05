// In 'pages/_layout.js' (or wherever you have the RootLayout)

import Navbar from '../components/Navbar';  // Make sure the path is correct
import '../style/globals.css';  // Make sure the path to globals.css is correct

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Head elements (title, meta tags, etc.) */}
      </head>
      <body>
        <Navbar />  {/* Navbar Component */}
        {children}
      </body>
    </html>
  );
}
