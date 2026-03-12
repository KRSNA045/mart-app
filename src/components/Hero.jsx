import "./Hero.css"

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="container-fluid px-5">
        <div className="row align-items-center min-vh-100">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 text-center text-lg-start hero-left">
            <span className="hero-badge">🔥 New Collection 2026</span>

            <h1 className="hero-title">
              Discover Your <span>Style</span> With Confidence
            </h1>

            <p className="hero-subtitle">
              Shop the latest trends with unbeatable prices and lightning-fast delivery.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-danger btn-lg px-4 me-3">
                Shop Now
              </button>

              <button className="btn btn-outline-dark btn-lg px-4">
                View Deals
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center hero-right">
            <div className="hero-image-box">
              <img
                src="/watch.png"
                alt="product"
                className="hero-image"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
