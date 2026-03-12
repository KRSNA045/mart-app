import Hero from "../components/Hero"
import Categories from "../components/Categories"
import FeaturedProducts from "../components/FeaturedProducts"
import PromoBanner from "../components/PromoBanner"
import BestSellers from "../components/BestSellers"
import Newsletter from "../components/Newsletter"
import ProductsSection from "../components/ProductsSection"

import Footer from "../components/Footer"

function Home() {
  return (
    <>
     
      <Categories />
      <FeaturedProducts />
      <ProductsSection />
      <PromoBanner />
      <BestSellers />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
  