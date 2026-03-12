import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaShoppingCart, FaUser } from "react-icons/fa"

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [cartCount] = useState(2) // temporary static value

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg premium-navbar fixed-top ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold brand-logo" to="/">
          Nex<span>Basket</span>
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">

          {/* Center Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-links-custom">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#categories">Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>

          {/* Right Side Icons */}
          <div className="d-flex align-items-center gap-4">

            <Link to="/login" className="nav-icon">
              <FaUser />
            </Link>

            <div className="cart-wrapper">
              <FaShoppingCart className="nav-icon" />
              <span className="cart-badge">{cartCount}</span>
            </div>

          </div>

        </div>
      </div>
    </nav>
  )
}

export default Header
