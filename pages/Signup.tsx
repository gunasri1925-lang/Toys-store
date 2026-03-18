function Signup() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Create Account 🧸</h2>
        <p>Signup to start shopping</p>

        <input placeholder="Name" className="form-control mb-2" />
        <input placeholder="Email" className="form-control mb-2" />
        <input placeholder="Password" type="password" className="form-control mb-2" />

        <button className="login-btn">Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;