import { FaStar, FaShoppingCart } from "react-icons/fa";

function ProductsSection() {
  const products = [
    {
      id: 1,
      title: "Smart Watch",
      price: 79,
      oldPrice: 99,
      sale: true,
      image: "https://imgs.search.brave.com/SDhDFhHXAWRygOnRQRHCACX0jmJuhyxnkRy7LdFQLOk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzMwMC8zMDAveGlm/MHEvc21hcnR3YXRj/aC93L24vZS8tb3Jp/Z2luYWwtaW1hZ3Z6/YXV3dnF6cHp2eS5q/cGVnP3E9OTA",
    },
    {
      id: 2,
      title: "Premium Sneakers",
      price: 129,
      image: "https://imgs.search.brave.com/lACTYmfdIpMSwWiorsZ3VURSvuII_I2t6D3hKnhvJGg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGFzaGluZ2Jvb3Qu/Y29tL2Nkbi9zaG9w/L2ZpbGVzL1doYXRz/QXBwSW1hZ2UyMDIz/LTA0LTE1YXQxOC4x/OC4zOV8xLmpwZz92/PTE2ODI0MjI0MDUm/d2lkdGg9NTMz",
    },
    {
      id: 3,
      title: "Wireless Headphones",
      price: 149,
      oldPrice: 199,
      sale: true,
      image: "https://imgs.search.brave.com/jXrzDd8RjJW-6ZLmXbIun_Dx-qbDYyMUqC23w3zd4mk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjUv/Nzk2LzczOC9zbWFs/bC93aXJlbGVzcy1o/ZWFkcGhvbmVzLWF1/ZGlvLWZvci1saXN0/ZW4tcGhvdG8uanBl/Zw",
    },
    {
      id: 4,
      title: "Leather Jacket",
      price: 249,
      image: "https://imgs.search.brave.com/XyBATCe77h_n9StqJJ4-GcrfWdLxyr6TYMeq0nmlN4k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bmV3YW1lcmljYW5q/YWNrZXRzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/Ni9LeWxpZS1KZW5u/ZXItS25pY2tzLUdh/bWUtMjAyNS1MZWF0/aGVyLUphY2tldC5q/cGc",
    },
  ];

  return (
    <section className="insane-products">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="insane-products-title">New arrivals</h2>
        </div>

        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-3">
              <div className="insane-product-card">
                {product.sale && <span className="insane-sale">SALE</span>}

                <div className="insane-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="insane-product-image"
                  />
                </div>

                <div className="insane-content">
                  <h6>{product.title}</h6>

                  <div className="insane-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <div className="insane-price">
                    <span className="new-price">${product.price}</span>
                    {product.oldPrice && (
                      <span className="old-price">${product.oldPrice}</span>
                    )}
                  </div>

                  <button className="insane-cart-btn">
                    <FaShoppingCart className="me-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
