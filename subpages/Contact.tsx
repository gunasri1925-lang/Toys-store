function Contact() {
  return (
    <div className="mt-4">
      <h3>Contact Us</h3>

      <form className="row g-3">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>

        <div className="col-md-6">
          <input type="email" className="form-control" placeholder="Email" />
        </div>

        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Phone Number" />
        </div>

        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Quantity" />
        </div>

        <div className="col-12">
          <textarea className="form-control" rows={4} placeholder="Message"></textarea>
        </div>

        <div className="col-12">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;