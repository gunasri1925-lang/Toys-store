import Image from"../../assets/images/group.png";
function Hero(){
    return(
        <>
<div className="container hero col-xxl-8 px-4 py-5"> <div className="row flex-lg-row-reverse align-items-center g-5 py-5"> <div className="col-10 col-sm-8 col-lg-6"> <img src={Image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="1500" height="400" loading="lazy"/> </div> <div className="col-lg-6"> <h1 className=" display-5 fw-bold text-body-emphasis lh-2 mb-4">WE BELEIVE THAT</h1> <p className="lead para">At our toy store, we believe that play is the serious work of childhood, essential for healthy development and lasting joy. We believe in nurturing imagination by offering open-ended toys that allow children to build, explore, and create their own worlds, rather than just consuming entertainment.</p> </div> </div> </div>
</>
    )
}
export default Hero;