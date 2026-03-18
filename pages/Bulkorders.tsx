import { useState, useRef } from "react";
import BulkBanner from "../subpages/BulkBanner";
import ReturnGifts from "../subpages/ReturnGifts";
import Corporate from "../subpages/Corporate";
import Contact from "../subpages/Contact";

function Bulkorders() {
  const [active, setActive] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleClick = (type: string) => {
    setActive(type);

    // 👇 scroll to content
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>

      {/* TOP NOTE */}
      <p className="top-note text-center ">
        Special price for schools and institutions is available. 
        You can also call us / WhatsApp on the number provided in the contact us page.
      </p>

      {/* BANNER */}
      <BulkBanner />

      <div className="container mt-5">

        {/* HERO */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Bulk Orders & Wholesale</h1>
          <p className="text-muted">
            Get the best deals for return gifts, corporate gifting, and special occasions.
          </p>
        </div>

        {/* CARDS */}
        <div className="row text-center mb-5">

          {/* RETURN GIFTS */}
          <div className="col-md-4 mb-3">
            <div className={`card p-4 shadow-sm h-100 bulk-card ${active === "return" ? "active-card" : ""}`}>
              <h5>🎁 Return Gifts</h5>
              <p>Perfect toys for birthdays and kids' events.</p>
              <button
                className="btn btn-outline-primary"
                onClick={() => handleClick("return")}
              >
                Explore
              </button>
            </div>
          </div>

          {/* CORPORATE */}
          <div className="col-md-4 mb-3">
            <div className={`card p-4 shadow-sm h-100 bulk-card ${active === "corporate" ? "active-card" : ""}`}>
              <h5>🏢 Corporate Orders</h5>
              <p>Bulk gifting solutions for companies.</p>
              <button
                className="btn btn-outline-success"
                onClick={() => handleClick("corporate")}
              >
                Explore
              </button>
            </div>
          </div>

          {/* CONTACT */}
          <div className="col-md-4 mb-3">
            <div className={`card p-4 shadow-sm h-100 bulk-card ${active === "contact" ? "active-card" : ""}`}>
              <h5>📞 Contact Us</h5>
              <p>Reach out for custom bulk requirements.</p>
              <button
                className="btn btn-outline-warning"
                onClick={() => handleClick("contact")}
              >
                Contact
              </button>
            </div>
          </div>

        </div>

       

        {/* 👇 CONTENT SECTION */}
        <div ref={sectionRef} className="mt-4">
          {active === "return" && <ReturnGifts />}
          {active === "corporate" && <Corporate />}
          {active === "contact" && <Contact />}
        </div>

      </div>
    </div>
  );
}

export default Bulkorders;