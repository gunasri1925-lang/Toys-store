



import toy1 from "../assets/images/toy1.jpg";
import toy2 from "../assets/images/toy2.jpg";
import toy3 from "../assets/images/toy3.jpg";

function Aboutus() {
  return (
    <div className="about-page container py-5">

      {/* Title */}
      <h1 className="text-center about mb-4">About Us</h1>

      {/* About Text */}
      <div className="about-text text-center mb-5">
       {/* Who We Are */}
      <section className="mb-4">
        <h3 className="about">Who We Are</h3>
        <p className="page">
          Welcome to our Toy Store, a place where imagination, creativity, and fun
          come together. We are passionate about bringing joy to children and
          families by offering a wide range of high-quality toys for all age
          groups. From educational toys to creative playsets, our collection is
          carefully selected to support learning, development, and endless
          entertainment.
        </p>

        <p className="page">
          Our goal is to create a magical shopping experience where every child
          can discover something exciting and every parent can find trusted
          products for their little ones.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-4">
        <h3 className="about">Our Mission</h3>
        <p className="page">
          Our mission is to inspire creativity and learning through play. We
          believe toys are more than just fun—they help children develop
          important skills such as problem-solving, imagination, and social
          interaction.
        </p>

        <p>
          That is why we focus on providing toys that are safe, engaging, and
          designed to encourage growth and exploration for every child.
        </p>
      </section>

      {/* What We Offer */}
      <section>
        <h3 className="about">What We Offer</h3>
        <p className="page">
          We provide a wide selection of toys from trusted brands including
          educational games, puzzles, activity kits, plush toys, and interactive
          learning products.
        </p>

        <p className="page">
          Whether you are looking for birthday gifts, return gifts, or everyday
          playtime essentials, our store offers something special for every
          child. We are committed to quality, customer satisfaction, and making
          every playtime memorable.
        </p>
      </section>
      </div>

      {/* Toy Images Section */}
      <div className="row text-center mb-5">

        <div className="col-md-4">
          <div className="toy-card">
            <img src={toy1} alt="Toy" />
            <h5 className="about">Creative Toys</h5>
          </div>
        </div>

        <div className="col-md-4">
          <div className="toy-card">
            <img src={toy2} alt="Toy" />
            <h5 className="about">Educational Toys</h5>
          </div>
        </div>

        <div className="col-md-4">
          <div className="toy-card">
            <img src={toy3} alt="Toy" />
            <h5 className="about">Fun Playsets</h5>
          </div>
        </div>

      </div>

      {/* Statistics Section */}
      <div className="stats-section">

        <div className="stat-box">
          <h2 >5000+</h2>
          <p>Happy Kids</p>
        </div>

        <div className="stat-box">
          <h2 >120+</h2>
          <p>Toy Brands</p>
        </div>

        <div className="stat-box">
          <h2 >10000+</h2>
          <p>Toys Sold</p>
        </div>

        <div className="stat-box">
          <h2>4.8⭐</h2>
          <p>Customer Rating</p>
        </div>

      </div>

    </div>
  );
}

export default Aboutus;