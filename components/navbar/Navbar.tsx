import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import type { Product } from "../../data/Products";

interface NavbarProps {
  cart: Product[];
  wishlist: Product[];
  products: Product[];
}

function Navbar({ cart, wishlist, products }: NavbarProps) {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAgeMenu, setShowAgeMenu] = useState(false);
  const [showBulkMenu, setShowBulkMenu] = useState(false);

  const searchRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setShowAgeMenu(false);
    setShowBulkMenu(false);
    setShowSearch(false);
  }, [location]);

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 5);

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/search/${search}`);
      setShowSearch(false);
    }
  };

  // Close search when clicking outside
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <div className="container d-flex align-items-center justify-content-between">

        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="ToyStore Logo" className="logo-img" />
        </Link>

        {/* MENU */}
        <div className={`navbar-collapse ${menuOpen ? "show-menu" : "hide-menu"} justify-content-center`}>
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Home</Link>
            </li>

            <li className="nav-item">
              <Link to="/shopall" className="nav-link text-white">Shop All</Link>
            </li>

            <li className="nav-item">
              <Link to="/aboutus" className="nav-link text-white">About Us</Link>
            </li>

            {/* AGEWISE */}
            <li className="nav-item position-relative">
              <span
                className="nav-link text-white"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowAgeMenu(!showAgeMenu);
                  setShowBulkMenu(false);
                }}
              >
                Age Wise ▾
              </span>

              {showAgeMenu && (
                <ul className="dropdown-menu show">
                  <li><Link to="/age/1" className="dropdown-item">1 Year</Link></li>
                  <li><Link to="/age/2" className="dropdown-item">2 Years</Link></li>
                  <li><Link to="/age/3" className="dropdown-item">3 Years</Link></li>
                  <li><Link to="/age/4" className="dropdown-item">4+ Years</Link></li>
                </ul>
              )}
            </li>

            {/* BULK */}
            <li className="nav-item position-relative">
              <span
                className="nav-link text-white"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowBulkMenu(!showBulkMenu);
                  setShowAgeMenu(false);
                }}
              >
                Bulk Orders ▾
              </span>

              {showBulkMenu && (
                <ul className="dropdown-menu show">
                  <li><Link to="/bulkorders" state={{ section: "return" }} className="dropdown-item">Return Gifts</Link></li>
                  <li><Link to="/bulkorders" state={{ section: "corporate" }} className="dropdown-item">Corporate Gifts</Link></li>
                  <li><Link to="/bulkorders" state={{ section: "contact" }} className="dropdown-item">Contact</Link></li>
                </ul>
              )}
            </li>

          </ul>
        </div>

        {/* RIGHT ICONS */}
        <div className="d-flex align-items-center gap-3">

          <button
            type="button"
            className="btn p-0 border-0 bg-transparent"
            onClick={() => {
              setShowSearch(!showSearch);
              setMenuOpen(false);
              setShowAgeMenu(false);
              setShowBulkMenu(false);
            }}
          >
            <FaSearch size={20} className="text-white" />
          </button>

          <Link to="/cart" className="text-white position-relative">
            <FaShoppingCart />
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </Link>

          <Link to="/wishlist" className="text-white position-relative">
            <FaHeart />
            {wishlist.length > 0 && <span className="cart-badge">{wishlist.length}</span>}
          </Link>

          <Link to="/login" className="text-white">
            <FaUser />
          </Link>

        </div>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setShowSearch(false);
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      </div>

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
              onClick={() => setShowSearch(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;