import { Link } from "react-router-dom";
import type { Product } from "../data/Products";

interface WishlistProps {
  wishlist: Product[];
  setWishlist: React.Dispatch<React.SetStateAction<Product[]>>;
}

function Wishlist({ wishlist, setWishlist }: WishlistProps) {
    const removeFromWishlist = (id: number) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
  };
     if (wishlist.length === 0) {
       return <h3 className="text-center mt-5">Wishlist is empty</h3>;
  }

  return (
    <div className="container mt-4">
        <h2 className="text-center mb-4">Wishlist</h2>
    <div className="row">
        {wishlist.map((item) => (
    <div className="col-md-4 mb-4" key={item.id}>
    <div className="card text-center shadow">

{/* CLICK IMAGE → PRODUCT PAGE */}
    <Link to={`/product/${item.id}`}>
       <img src={item.image} alt={item.name} className="card-img-top" />
    </Link>
    <div className="card-body">
      <h5>{item.name}</h5>
      <p className="text-danger">₹{item.price}</p>

{/* REMOVE BUTTON */}
      <button className="btn btn-danger"  onClick={() => removeFromWishlist(item.id)}> Remove </button>
    </div>
    </div>
    </div>
))}
    </div>
    </div>
  );
}

export default Wishlist;