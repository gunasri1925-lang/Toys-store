function Contact() {
  return (
    <div className="container mt-5 return-section">
       <h3 className="text-center  text-danger-emphasis mb-3 fade-in">Contact for Bulk Orders</h3>

      <p>
        Interested in placing a bulk order? Our team is happy to
        assist you with pricing, customization, and delivery details.
      </p>

      <p><strong>Email:</strong> bulkorders@toystore.com</p>
      <p><strong>Phone:</strong> +91 9876543210</p>
      <p><strong>Address:</strong> Toy Store, Hyderabad, India</p>

      <button className="btn btn-primary mt-3">
        Request Quote
      </button>

    </div>
  );
}

export default Contact;