import banner from "../assets/images/BulkBanner.png";

function BulkBanner() {
  return (
    <div className="bulk-banner-wrapper">

      <div className="container bulk-banner-box">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-md-6 text-center">
            <img
              src={banner}
              alt="toys"
              className="img-fluid bulk-banner-img"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="col-md-6 text-right text-md-start mt-4 mt-md-0">

            <p className="small-heading">VARIETY OF RANGE</p>

            <h1 className="main-heading">
              for kids
            </h1>

            <p className="sub-text">
              AT DISCOUNTED WHOLESALE PRICE <br />
              FOR RETURN GIFT / SCHOOLS. <br />
              EDUCATIONAL INSTITUTIONS
            </p>

          </div>

        </div>
      </div>

    </div>
  );
}

export default BulkBanner;