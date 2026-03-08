import type { Product } from "../data/Products";

interface CartProps {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

function Cart({ cart, setCart }: CartProps) {
    const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };
    const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
        {cart.length === 0 ? (
      <p>Your cart is empty</p> 
      ) : (
      <>
        {cart.map((item) => (
    <div className="card mb-3" key={item.id}>
    <div className="row g-0 align-items-center">
    <div className="col-md-2">
        <img src={item.image} className="img-fluid" />
    </div>

    <div className="col-md-6">
        <h5>{item.name}</h5>
        <p>₹{item.price}</p>
    </div>

    <div className="col-md-4">
    <button className="btn btn-danger" onClick={() => removeItem(item.id)} >Remove </button>
    </div>
    </div>
    </div>
    ))}
        <h4>Total: ₹{total}</h4>
    </>
    )}
    </div>
  );
}

export default Cart;