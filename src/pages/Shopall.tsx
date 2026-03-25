import type { Product } from "../data/Products";
import { Link } from "react-router-dom";




interface ShopallProps {
  products: Product[];
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  wishlist: Product[];
  setWishlist: React.Dispatch<React.SetStateAction<Product[]>>;
}

function Shopall({products, cart, setCart,wishlist,setWishlist,}: ShopallProps) {
      const addToCart = (product: Product) => {setCart([...cart, product]);};
      const addToWishlist = (product: Product) => {setWishlist([...wishlist, product]);
  };

  return (
  <div className="container mt-4">
      <h2 className="mb-4">All Toys</h2>
  <div className="row">
      {products.map((item) => (
  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-4" key={item.id}>
    <div className="product-card">

     

      {/* Wishlist icon */}
      <span
        className="wishlist"
        onClick={(e) => {
          e.stopPropagation();
          addToWishlist(item);
        }}
      >
        ❤️
      </span>

      {/* Product Image */}
      <Link to={`/product/${item.id}`}>
        <div className="image-box">
          <img src={item.image} alt={item.name}/>
        </div>
      </Link>

      

      

      <div className="product-info">
        <h5>{item.name}</h5>

        <div className="price">₹{item.price}</div>

        <div className="rating">
          ⭐⭐⭐⭐☆
        </div>

        <button
          className="cart-btn"
          onClick={() => addToCart(item)}
        >
          ADD TO CART
        </button>
      </div>

    </div>
  </div>
))}
    </div>
    </div>
  );
}

export default Shopall;