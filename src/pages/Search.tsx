import { useParams } from "react-router-dom";
import type { Product } from "../data/Products";

interface SearchProps {
  products: Product[];
}

function SearchResults({ products }: SearchProps) {

  const { query } = useParams();

  const results = products.filter((item) =>
    item.name.toLowerCase().includes((query || "").toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Search Results for "{query}"</h2>

      {results.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="row">
          {results.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card shadow">
                <img src={item.image} className="card-img-top" />
                <div className="card-body text-center">
                  <h5>{item.name}</h5>
                  <p>₹{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default SearchResults;