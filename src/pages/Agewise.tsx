import { useParams, Link } from "react-router-dom";
import type { Product } from "../data/Products";

interface AgewiseProps {
  products: Product[];
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  wishlist: Product[];
  setWishlist: React.Dispatch<React.SetStateAction<Product[]>>;
}

function Agewise({ products, cart, setCart, wishlist, setWishlist }: AgewiseProps) {
  const { age } = useParams();

  const ageNumber = parseInt(age || "0");

  const filteredProducts = products.filter((item) => {
    if (ageNumber === 4) {
      return item.age >= 4;
    }
    return item.age === ageNumber;
  });

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const addToWishlist = (product: Product) => {
    setWishlist([...wishlist, product]);
  };

  return (
    <div className="container mt-5">

      <h2 className="mb-4 text-center">
        Toys for {ageNumber === 4 ? "4+ Years" : `${ageNumber} Year`} Kids
      </h2>

      <div className="row">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((item) => (

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-4" key={item.id}>

              <div className="product-card">

                {/* Wishlist */}
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
                <Link
                  to={`/product/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="product-img-box">
                    <img
                      src={item.image}
                      className="product-img"
                      alt={item.name}
                    />
                  </div>
                </Link>

                {/* Product Info */}
                <div className="product-info">

                  <h6 className="product-title">{item.name}</h6>

                  <div className="price">₹{item.price}</div>

                  

                  <button
                    className="cart-btn"
                    onClick={() => addToCart(item)}
                  >
                    ADD TO CART
                  </button>

                </div>

              </div>

            </div>

          ))

        ) : (

          <h5 className="text-center">No products found.</h5>

        )}

      </div>

    </div>
  );
}

export default Agewise;