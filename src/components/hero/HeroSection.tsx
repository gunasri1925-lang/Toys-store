import image1 from"../../assets/images/hero1.png";
import  image2 from"../../assets/images/hero2.png";



function HeroSection()  {
  return (
    <div id="toyCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">

    {/* Slide 1 */}
    <div className="carousel-item active">
    <div className="carousel-overlay"></div>
      <img src={image1} className="d-block w-100 carousel-img" alt="Toy 1" />
    <div className="carousel-caption custom-caption">
      <h1>Fun Toys Collection</h1>
      <p>Discover amazing toys for kids</p>
            
    </div>
    </div>

    {/* Slide 2 */}
    <div className="carousel-item">
    <div className="carousel-overlay"></div>
      <img src={image2} className="d-block w-100 carousel-img" alt="Toy 2" />
    <div className="carousel-caption custom-caption">
      <h1>Best Selling Toys</h1>
      <p>Quality toys at affordable prices</p>
    </div>
    </div>
    </div>

    {/* Controls */}
    <button className="carousel-control-prev" type="button" data-bs-target="#toyCarousel" data-bs-slide="prev">
       <span className="carousel-control-prev-icon"></span>
    </button>

    <button className="carousel-control-next" type="button" data-bs-target="#toyCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
    </div>
  
  );
};

export default HeroSection;