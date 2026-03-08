import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import type { Product } from "../../data/Products";

interface NavbarProps {
  cart: Product[];
  wishlist: Product[];
  products: Product[];
}

function Navbar({ cart, wishlist, products }: NavbarProps) {

  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const searchRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 5); // limit suggestions

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/search/${search}`);
      setShowSearch(false);
    }
  };

  useEffect(() => {

    function handleClickOutside(event: MouseEvent) {

      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
      }

    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  return (

    <nav className="navbar navbar-expand-lg fixed-top">

      <div className="container">

{/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="ToyStore Logo" className="logo-img" />
        </Link>

{/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

<div className="collapse navbar-collapse" id="navbarContent">

{/* CENTER MENU */}
<ul className="navbar-nav mx-auto">

<li className="nav-item">
<Link className="nav-link text-white" to="/">Home</Link>
</li>

<li className="nav-item">
<Link className="nav-link text-white" to="/shopall">Shop All</Link>
</li>

<li className="nav-item">
<Link className="nav-link text-white" to="/aboutus">About Us</Link>
</li>

{/* AGEWISE */}
<li className="nav-item dropdown">

<a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
Age Wise
</a>

<ul className="dropdown-menu">

<li>
<Link className="dropdown-item" to="/age/1">1 Year</Link>
</li>

<li>
<Link className="dropdown-item" to="/age/2">2 Years</Link>
</li>

<li>
<Link className="dropdown-item" to="/age/3">3 Years</Link>
</li>

<li>
<Link className="dropdown-item" to="/age/4+">4+ Years</Link>
</li>

</ul>

</li>

{/* BULK ORDERS */}
<li className="nav-item dropdown">

<a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
Bulk Orders
</a>

<ul className="dropdown-menu">

<li>
<Link className="dropdown-item" to="/bulkorders/return-gifts">Return Gifts</Link>
</li>

<li>
<Link className="dropdown-item" to="/bulkorders/corporate">Corporate Gifts</Link>
</li>

<li>
<Link className="dropdown-item" to="/bulkorders/contact">Contact</Link>
</li>

</ul>

</li>

</ul>

{/* RIGHT SIDE */}

<div className="d-flex align-items-center gap-4 position-relative">

{/* SEARCH ICON */}
<button
type="button"
className="btn p-0 border-0 bg-transparent"
onClick={() => setShowSearch(!showSearch)}
>
<FaSearch size={20} className="text-white" />
</button>

{/* CART */}
<Link to="/cart" className="position-relative text-white">

<FaShoppingCart size={22} />

{cart.length > 0 && (
<span className="cart-badge">{cart.length}</span>
)}

</Link>

{/* WISHLIST */}
<Link to="/wishlist" className="position-relative text-white">

<FaHeart size={22} />

{wishlist.length > 0 && (
<span className="cart-badge">{wishlist.length}</span>
)}

</Link>

{/* LOGIN */}
<Link to="/login" className="text-white d-flex align-items-center gap-1">
<FaUser size={20} />
<span className="login-text">Login</span>
</Link>

{/* SEARCH POPUP */}

{showSearch && (

<div className="search-popup" ref={searchRef}>

<input
type="text"
placeholder="Search toys..."
className="form-control mb-2"
value={search}
onChange={(e) => setSearch(e.target.value)}
onKeyDown={handleSearchSubmit}
/>

{search && filteredProducts.map((item) => (

<Link
key={item.id}
to={`/product/${item.id}`}
className="search-result-item"
style={{ textDecoration: "none", color: "black" }}
onClick={() => setShowSearch(false)}
>


<span>{item.name}</span>

</Link>

))}

</div>

)}

</div>
</div>
</div>
</nav>

  );
}

export default Navbar;