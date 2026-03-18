import { useState  } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Login to continue shopping</p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <p className="login-footer">
          Don't have an account? <span onClick={() => navigate("/signup")}>Sign up</span>
        </p>

      </div>

    </div>
  );
}

export default Login;