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
    return <p>Product not found</p>;
  }

  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-md-6">
          <img src={product.image} className="img-fluid" />
        </div>

        <div className="col-md-6 text-center">

          <h2>{product.name}</h2>
          <h4>₹{product.price}</h4>
          
          <p>Age Group: {product.age}</p>

          <button
            className="btn btn-primary"
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