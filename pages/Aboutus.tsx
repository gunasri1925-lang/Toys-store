


import { FaBullseye, FaEye, FaSmile, FaShieldAlt, FaGift } from "react-icons/fa";
import toy5 from "../assets/images/toy5.jpg";
import toy6 from "../assets/images/toy6.jpg";
import toy9 from "../assets/images/toy9.jpg";



function Aboutus() {
  return (
    <div className="about-page container py-5">

      {/* Title */}
      <h1 className="text-center about  section-title mb-4">About Us</h1>
<div className="mission-section">
  <div className="about-text">
    <div className="row">

      {/* Mission */}
      <div className="col-md-6 mb-4">
        <div className="about-card text-center h-100">
          <FaBullseye className="about-icon"/>

          <h3 className="about mt-3">Our Mission</h3>

          <p className="page">
            Our mission is to inspire creativity and learning through play.
            We believe toys help children develop imagination,
            problem-solving skills and confidence.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="col-md-6 mb-4">
        <div className="about-card text-center h-100">
          <FaEye className="about-icon"/>

          <h3 className="about mt-3">Our Vision</h3>

          <p className="page">
            Our vision is to create a joyful world where children
            learn, explore and grow through meaningful play.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>

    
<div className="why-section text-center mb-5">

<h2 className="about section-title mb-4">Why Choose Our Toy Store</h2>

<div className="row justify-content-center">

<div className="col-lg-3 col-md-4 col-sm-6 mb-4">
<div className="why-card">

<FaSmile className="why-icon"/>

<h5>Kids Happiness</h5>
<p>We bring joy and creativity through fun and engaging toys.</p>

</div>
</div>

<div className="col-lg-3 col-md-4 col-sm-6 mb-4">
<div className="why-card">

<FaShieldAlt className="why-icon"/>

<h5>Safe Products</h5>
<p>All our toys are carefully selected and safe for children.</p>

</div>
</div>

<div className="col-lg-3 col-md-4 col-sm-6 mb-4">
<div className="why-card">

<FaGift className="why-icon"/>

<h5>Perfect Gifts</h5>
<p>Find the perfect toys for birthdays, return gifts and special moments.</p>

</div>
</div>

</div>
</div>


      <div className="toy-category container py-5">
        <h2 className="text-center mb-5 section-title">
Explore Our Toy Categories
</h2>
  <div className="row g-4 justify-content-center">

    {/* Creative Toys */}
    <div className="col-lg-4 col-md-6">
      <div className="toy-card text-center">
        <img src={toy5} alt="Creative Toys" className="toy-img"/>
        <h4>Creative Toys</h4>
      </div>
    </div>

    {/* Educational Toys */}
    <div className="col-lg-4 col-md-6">
      <div className="toy-card text-center">
        <img src={toy6} alt="Educational Toys" className="toy-img"/>
        <h4>Educational Toys</h4>
      </div>
    </div>

    {/* Fun Playsets */}
    <div className="col-lg-4 col-md-6">
      <div className="toy-card text-center">
        <img src={toy9} alt="Fun Playsets" className="toy-img"/>
        <h4>Fun Playsets</h4>
      </div>
    </div>

  </div>
</div>

      

      
      {/* Statistics Section */}
<div className="stats-section container py-5">

  <div className="row text-center">

    <div className="col-lg-3 col-md-6 mb-4">
      <div className="stat-card">
        <h2>5000+</h2>
        <p>Happy Kids</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4">
      <div className="stat-card">
        <h2>120+</h2>
        <p>Toy Brands</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4">
      <div className="stat-card">
        <h2>10000+</h2>
        <p>Toys Sold</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4">
      <div className="stat-card">
        <h2>4.8⭐</h2>
        <p> Ratings</p>
      </div>
    </div>

  </div>

</div>

</div>   

);
}

export default Aboutus;
  