import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section">
          <h2 className="footer-logo">ToyStore</h2>
          <p>Bringing smiles to kids with fun, educational and creative toys.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shopall">Shop All</Link></li>
            <li><Link to="/bulkorders">Bulk Orders</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@toyworld.com</p><p>Phone: +91 98765 43210</p><p>Chennai, India</p>
        </div>
        </div>
        <div className="footer-bottom">
        <p>© 2026 ToyWorld. All Rights Reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;