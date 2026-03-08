import { Link, Outlet } from "react-router-dom";

function Bulkorders() {
  return (
  <div className="container mt-5">
      <h2 className="text-center mb-4">Bulk Orders</h2>

{/* Sub Navigation */}
  <div className="d-flex justify-content-center gap-3 mb-4">
    <Link className="btn btn-outline-primary" to="return-gifts">
       Return Gifts
    </Link>

    <Link className="btn btn-outline-success" to="corporate">
       Corporate Orders
    </Link>

    <Link className="btn btn-outline-warning" to="contact">
       Contact Us
    </Link>
  </div>

{/* Nested Route Content */}
   <Outlet />
  </div>
  );
}

export default Bulkorders;