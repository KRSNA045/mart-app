import { FaStar, FaShoppingCart } from "react-icons/fa"

function ProductCard({ product }) {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="product-card">

        {product.sale && (
          <span className="sale-badge">SALE</span>
        )}

        <div className="product-image-wrapper">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>

        <div className="product-content">
          <h6 className="product-title">{product.title}</h6>

          <div className="product-rating">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <div className="product-price">
            <span className="current-price">${product.price}</span>
            {product.oldPrice && (
              <span className="old-price">${product.oldPrice}</span>
            )}
          </div>

          <button className="btn product-btn w-100">
            <FaShoppingCart className="me-2" />
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductCard
