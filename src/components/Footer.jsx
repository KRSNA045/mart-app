import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="ultra-footer">
      <div className="container">
        <div className="row gy-5">
          {/* Brand */}
          <div className="col-md-3">
            <h4 className="footer-brand">NexBasket</h4>
            <p className="footer-text">
              Premium E-Commerce Experience with style, speed & security.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li>Home</li>
              <li>Products</li>
              <li>Categories</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-3">
            <h6 className="footer-heading">Support</h6>
            <ul className="footer-links">
              <li>FAQ</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-3">
            <h6 className="footer-heading">Follow Us</h6>
            <div className="footer-social">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom text-center">
          © {new Date().getFullYear()} NexBasket. All rights reserved.
        </div>
      </div>

      <button className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;
