
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa"

function BestSellers() {

  const products = [
    {
      id: 1,
      name: "Luxury Smart Watch",
      price: 199,
      oldPrice: 249,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id: 2,
      name: "Premium Sneakers",
      price: 149,
      oldPrice: 199,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 129,
      oldPrice: 179,
      image: "https://tse3.mm.bing.net/th/id/OIP.N-9l2UIz7kkCOCcPT4zXzAHaE8?pid=Api&P=0&h=180"
    },
    {
      id: 4,
      name: "Designer Sunglasses",
      price: 89,
      oldPrice: 120,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
    }
  ]

  return (
    <section className="ultra-best">
      <div className="container">
        <h2 className="ultra-title text-center">
          🔥 Best <span>Sellers</span>
        </h2>

        <div className="row g-4 mt-5">
          {products.map(product => (
            <div key={product.id} className="col-md-6 col-lg-3">
              <div className="ultra-card">

                <div className="discount-badge">
                  -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                </div>

                <div className="wishlist">
                  <FaHeart />
                </div>

                <div className="ultra-img">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="ultra-content">
                  <h5>{product.name}</h5>

                  <div className="rating">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>

                  <div className="price-row">
                    <div>
                      <span className="new-price">${product.price}</span>
                      <span className="old-price">${product.oldPrice}</span>
                    </div>

                    <button className="ultra-cart">
                      <FaShoppingCart />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSellers