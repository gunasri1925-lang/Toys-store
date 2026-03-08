
import BlogSection from "../components/hero/BlogSection";
import type { Product } from "../data/Products";
import Hero from "../components/hero/Hero";
import AgeSlider from "../components/slider/AgeSlider";


interface HomeProps {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  products: Product[];
  wishlist: Product[];
  setWishlist: React.Dispatch<React.SetStateAction<Product[]>>;
}

function Home({}: HomeProps){
  return(
    <>
      <div className="container">
        <h1 className="heading">
          Toys for Kids that Spark Imaginative Play
        </h1>

        <p className="para">
          Imaginative play helps to develop children's cognitive skills,
          including problem-solving, creativity, and critical thinking.
        </p>
      </div>

      <AgeSlider/>
      <Hero/>
     
      <BlogSection/>
    </>
  )
}

export default Home;