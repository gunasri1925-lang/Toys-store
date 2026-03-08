import { useParams, Link } from "react-router-dom";
import type { Product } from "../data/Products";

interface AgewiseProps {
  products: Product[];
}

function Agewise({ products }: AgewiseProps) {
  const { age } = useParams();

  const ageNumber = parseInt(age || "0");

  const filteredProducts = products.filter((item) => {
    if (ageNumber === 4) {
      return item.age >= 4;
    }
    return item.age === ageNumber;
  });

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">
        Toys for {ageNumber === 4 ? "4Years" : `${ageNumber} Year`} Kids
      </h2>

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <div className="card shadow h-100">

                <Link
                  to={`/product/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    height="220"
                    style={{ objectFit: "cover" }}
                  />

                  <div className="card-body text-center">
                    <h5>{item.name}</h5>
                    <p className="text-danger fw-bold">₹{item.price}</p>
                  </div>
                </Link>

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