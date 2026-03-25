import { useParams } from "react-router-dom";
import type { Product } from "../data/Products";

interface Props {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  products: Product[];
}

function ProductDetails({ cart, setCart, products }: Props) {

  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center mt-5">Product not found</p>;
  }

  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div className="container product-details py-5">
      <div className="row align-items-center">

        {/* Product Image */}
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.name}
            className="product-detail-img img-fluid"
          />
        </div>

        {/* Product Info */}
        <div className="col-md-6">

          <h2 className="product-title">{product.name}</h2>

          <h4 className="product-price">₹{product.price}</h4>

          <p className="product-age">
            <strong>Age Group:</strong> {product.age}
          </p>

          <p className="product-desc">
            This toy helps children develop creativity, motor skills,
            and imagination through fun learning activities.
          </p>

          <button
            className="btn btn-danger add-cart-btn"
            onClick={addToCart}
          >
            Add To Cart
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductDetails;