import Image from"../../assets/images/group.png";
function Hero(){
    return(
        <>
<div className="container-fluid hero-section ">
<div className="row  align-items-center">
<div className="col-12  col-lg-6 text-center  text-lg-start">
  <img src={Image} className=" hero-img img-fluid" alt="toys"  loading="lazy"/> 
</div> 
<div className=" col-12 col-lg-6 text-center text-lg-start">
     <h1 className=" display-5 fw-bold  lh-2 mb-4 hero-title">WE BELEIVE THAT</h1> <p className="hero-text">At our toy store, we believe that play is the serious work of childhood, essential for healthy development and lasting joy. We believe in nurturing imagination by offering open-ended toys that allow children to build, explore, and create their own worlds, rather than just consuming entertainment.</p>
</div> 
</div>
</div>
</>
    )
}
export default Hero;