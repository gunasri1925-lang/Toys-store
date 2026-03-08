
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import type { Product } from "./data/Products";
import { productsData } from "./data/Products";

import HeroSection from "./components/hero/HeroSection";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home";
import Shopall from "./pages/Shopall";
import Agewise from "./pages/Agewise";
import Bulkorders from "./pages/Bulkorders";
import ReturnGifts from "./subpages/ReturnGifts";
import Corporate from "./subpages/Corporate";
import Contact from "./subpages/Contact";
import ProductDetails from "./pages/ProductDetails";
import BlogDetails from "./pages/BlogDetails";
import Aboutus from "./pages/Aboutus";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import SearchResults from "./pages/Search";
import Login from "./pages/Login";
import Footer from "./components/footer/Footer";


function App() {

  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [products] = useState<Product[]>(productsData);

  return (
    <>
{/* Navbar */}
  <Navbar cart={cart}   wishlist={wishlist} products={products} />
  <div style={{ marginTop: "90px" }}>
  <Routes>

      
{/* HOME */}
  <Route path="/" element={
     <>
  <HeroSection />
  <Home cart={cart} setCart={setCart} products={products} wishlist={wishlist} setWishlist={setWishlist}/>
     </>
}
 />

{/* SHOP ALL */}
   <Route path="/shopall" element={<Shopall
        cart={cart} setCart={setCart} products={products} wishlist={wishlist}setWishlist={setWishlist}/>
}
/>
<Route path="/aboutus" element={<Aboutus />} />
{/* AGEWISE */}
    <Route path="/age/:age" element={ <Agewise products={products

    }/>
}
/>

{/* PRODUCT DETAILS */}
    <Route
  path="/product/:id"
  element={<ProductDetails cart={cart} setCart={setCart} products={products} />}
/>


{/* SEARCH RESULTS */}
    <Route path="/search/:query"element={ <SearchResults products={products} />
}
/>

{/* CART PAGE */}
    <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />
}
/>

{/* WISHLIST PAGE */}
    <Route path="/wishlist" element={ <Wishlist wishlist={wishlist}   setWishlist={setWishlist}/>
}
/>
<Route path="/login" element={<Login />} />
{/* BLOG */}
    <Route path="/blog/:id" element={<BlogDetails />} />

{/* BULK ORDERS */}
    <Route path="/bulkorders" element={<Bulkorders />}>
        <Route path="return-gifts" element={<ReturnGifts />} />
        <Route path="corporate" element={<Corporate />} />
        <Route path="contact" element={<Contact />} />
    </Route>

  </Routes>
  </div>
  <Footer />
  </>
  );
}

export default App;