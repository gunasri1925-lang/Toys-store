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
  <div className="col-md-3 mb-4" key={item.id}>
  <div className="card shadow h-100">

{/* Product Image */}
      <Link  to={`/product/${item.id}`} style={{ textDecoration: "none", color: "black" }} >
        <img src={item.image} className="card-img-top" alt={item.name}  style={{ height: "200px", objectFit: "cover" }} />
      </Link>

   <div className="card-body text-center">
{/* Product Name */}
       <h6>{item.name}</h6>

{/* Price */}
      <p>₹{item.price}</p>

{/* Buttons */}
    <div className="d-flex justify-content-center gap-2">

{/* Add to Cart */}
    <button className="btn btn-primary btn-sm" onClick={() => addToCart(item)}> Add to Cart </button>

 {/* Wishlist */}
    <button className="btn btn-outline-danger btn-sm"  onClick={(e) => {
        e.stopPropagation();   // prevents parent click
        addToWishlist(item); }}> ❤️
     </button>

    </div>
    </div>
    </div>
    </div>
))}
    </div>
    </div>
  );
}

export default Shopall;