import { Link } from "react-router-dom";


import age1 from "../../assets/images/age1.png";
import age2 from "../../assets/images/age2.png";
import age3 from "../../assets/images/age3.png";
import age4 from "../../assets/images/age4.png";
function AgeSlider() {
  const ages = [
    { label: "1 Year", value: 1, image: age1 },
    { label: "2 Years", value:2, image: age2 },
    { label: "3 Years",value: 3,  image: age3 },
    { label: "4+ Years",value: 4,  image: age4 },
  ];

  return (
    <div className="age-container">
      <h2 className="age-title">Shop by Age</h2>

    <div className="slider">
    <div className="slide-track">
      {[...ages, ...ages].map((age, index) => (
      <Link key={index} to={`/age/${age.value}`} className="age-link">
          <div className="age-wrapper">

{/* 🔢 Number Circle */}
      <div className="age-number">
        {age.value}
      </div>
{/* 🖼 Image */}
      <div className="age-image" style={{ backgroundImage: `url(${age.image})` }} />
{/* 📝 Label */}
     <div className="age-label">
        {age.label}
    </div>
    </div>
    </Link>
    ))}
    </div>
    </div>
    </div>
  );
}

export default AgeSlider;