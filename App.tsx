import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";

// COMPONENTS
import HeroSection from "./src/components/hero/HeroSection";
import Navbar from "./src/components/navbar/Navbar";
import Footer from "./src/components/footer/Footer";
import ScrollToTop from "./src/components/scroll/ScrollToTop";

// PAGES
import Home from "./src/pages/Home";
import Shopall from "./src/pages/Shopall";
import Agewise from "./src/pages/Agewise";
import Bulkorders from "./src/pages/Bulkorders";
import ProductDetails from "./src/pages/ProductDetails";
import BlogDetails from "./src/pages/BlogDetails";
import Aboutus from "./src/pages/Aboutus";
import Cart from "./src/pages/Cart";
import Wishlist from "./src/pages/Wishlist";
import SearchResults from "./src/pages/Search";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";

// SUBPAGES
import ReturnGifts from "./src/subpages/ReturnGifts";
import Corporate from "./src/subpages/Corporate";
import Contact from "./src/subpages/Contact";

// ✅ DATA + TYPE (FIXED)
import products from "./src/data/Products"; // if default export
// If error → use: import { products } from "./src/data/Products";

import type { Product } from "./src/data/Products";

function App() {
  // ✅ STATE
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  return (
    <>
      {/* NAVBAR */}
      <Navbar cart={cart} wishlist={wishlist} products={products} />

      <div style={{ marginTop: "90px" }}>
        <ScrollToTop />

        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Home
                  cart={cart}
                  setCart={setCart}
                  products={products}
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                />
              </>
            }
          />

          {/* SHOP ALL */}
          <Route
            path="/shopall"
            element={
              <Shopall
                cart={cart}
                setCart={setCart}
                products={products}
                wishlist={wishlist}
                setWishlist={setWishlist}
              />
            }
          />

          {/* ABOUT */}
          <Route path="/aboutus" element={<Aboutus />} />

          {/* AGEWISE */}
          <Route
            path="/age/:age"
            element={
              <Agewise
                products={products}
                cart={cart}
                setCart={setCart}
                wishlist={wishlist}
                setWishlist={setWishlist}
              />
            }
          />

          {/* PRODUCT DETAILS */}
          <Route
            path="/product/:id"
            element={
              <ProductDetails
                cart={cart}
                setCart={setCart}
                products={products}
              />
            }
          />

          {/* SEARCH */}
          <Route
            path="/search/:query"
            element={<SearchResults products={products} />}
          />

          {/* CART */}
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />

          {/* WISHLIST */}
          <Route
            path="/wishlist"
            element={
              <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
            }
          />

          {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

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

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;