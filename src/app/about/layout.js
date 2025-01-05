import '../../style/about.css'; 


export default function AboutLayout({ children }) {
    return (
      <div>
        <header>
          <h1>About Us</h1>
        </header>
        <main>{children}</main>
      </div>
    );
  }