import skillmatics from "../../assets/brands/skillmatics.jpg";
import winfun from "../../assets/brands/winfun.png";
import step2 from "../../assets/brands/step2.jpg";
import playshifu from "../../assets/brands/playshifu.jpg";
import wildrepublic from "../../assets/brands/wildrepublic.jpg";
import elc from "../../assets/brands/elc.jpg";

const brands = [
  { name: "Skillmatics", image: skillmatics },
  { name: "Winfun", image: winfun },
  { name: "Step2", image: step2 },
  { name: "PlayShifu", image: playshifu },
  { name: "Wild Republic", image: wildrepublic },
  { name: "ELC Toys", image: elc }
];

function FeaturedBrands() {
  return (
    <div className="brands-section">

      <h2>Featured Brands</h2>

      <div className="brands-grid">

        {brands.map((brand,index)=>(
          <div key={index} className="brand-card">

            <img src={brand.image} alt={brand.name}/>
            <p>{brand.name}</p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default FeaturedBrands;