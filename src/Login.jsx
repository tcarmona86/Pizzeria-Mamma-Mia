import { useState, useContext } from "react";
import { UserContext } from "./context/UserContext";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    if (password.length < 6) {
      setError("El password debe tener al menos 6 caracteres.");
      return;
    }

    try {
      await login(email, password);
      setError("");
      navigate("/");
    } catch (err) {
      setError("Error al iniciar sesión");
    }
  };

  return (
    <main className="login">
      <h1>Login</h1>
      <div className="container-login">
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </main>
  );
}

export default Login;
