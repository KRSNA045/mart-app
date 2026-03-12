import ProductCard from "./ProductCard"

function ProductsSection() {

  const products = [
    {
      id: 1,
      title: "Smart Watch",
      price: 79,
      oldPrice: 99,
      sale: true,
      image: "https://imgs.search.brave.com/74UlAdoLbfc6CcCJVDHfCVFonV8ZUNTwqgK26VJFVS8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/a2lja3NtYWNoaW5l/LmNvbS9jZG4vc2hv/cC9maWxlcy9IeXBl/Zmx5XzVfaW1hZ2Vf/VGVtcGxhdGVfM19i/MzdhYTZiNWIyLndl/YnA_dj0xNzUyNDMz/ODIzJndpZHRoPTEw/MDA"
    },
    {
      id: 2,
      title: "Sneakers",
      price: 59,
      image: "https://imgs.search.brave.com/Ayu0kkk7Oc34o47AtXy7KhWtwhSG05PpIUgIkTE24_k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE1LzU3LzkwLzY0/LzM2MF9GXzE1NTc5/MDY0MThfZjl2ajdN/dW5qMW90WlRnUDNK/YW5rTHg1Qnk2RDM1/WFouanBn"
    },
    {
      id: 3,
      title: "Wireless Headphones",
      price: 120,
      oldPrice: 150,
      sale: true,
      image: "https://imgs.search.brave.com/Hn5kxJdWZhlcUfhfGqW0VB1dNoFi4NGqMWSaKZGg5MM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NDk2NjY4Ni9waG90/by9iZWlqaW5nLWNo/aW5hLWFpcnBvZHMt/bWF4LWlzLXNlZW4t/YXQtYW4tYXBwbGUt/c3RvcmUtb24tamFu/dWFyeS0yLTIwMjEt/aW4tYmVpamluZy1j/aGluYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9aXlyd0Np/TkJ6UW9jZzdUTHEt/LTNpNGM5dXpiTkda/NHprOW4tdUwwRWtk/Zz0"
    },
    {
      id: 4,
      title: "Leather Jacket",
      price: 199,
      image: "https://imgs.search.brave.com/JpQNekXnAwq-I0xM-zr0EHN3YN6aD4yDbMpQG62Uqc4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAyLzIx/LzU4LzAyMjE1ODg3/MmJmYmRlM2Q0YjE5/ZTkzNjM0ZTVjZTVi/LmpwZw"
    }
  ]

  return (
    <section className="products-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Featured Products</h2>
          <p className="text-muted">Handpicked premium collection</p>
        </div>

        <div className="row g-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
