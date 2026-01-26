import './App.css';
import { formatoPrecio } from './utils/formatoPrecio.js';
import { FaHome, FaSignInAlt, FaUserPlus, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { UserContext } from "./context/UserContext";

function Navbar() {
  const { token, logout } = useContext(UserContext);
  const { total } = useContext(CartContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleLogout = () => {
    logout();                
    setMessage("Sesión cerrada correctamente ✅");
    navigate("/");     
    setTimeout(() => setMessage(""), 3000); 
  };

  return (
    <nav className="navbar">
      <ul>
        <li><strong>Pizzería Mamma Mía!</strong></li>
        <li><Link to="/" className="nav-btn"><FaHome />Home</Link></li>

        {token ? (
          <>
            <li><Link to="/profile" className="nav-btn"><FaUser />Perfil</Link></li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>Cerrar Sesión</button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login" className="nav-btn"><FaSignInAlt />Login</Link></li>
            <li><Link to="/register" className="nav-btn"><FaUserPlus />Registrar</Link></li>
          </>
        )}
      </ul>

      <Link to="/cart" className="cart-total">
        <FaShoppingCart style={{ marginRight: "8px" }} />
        Total: ${formatoPrecio(total)}
      </Link>

      {message && <p className="logout-message">{message}</p>}
    </nav>
  );
}

export default Navbar;
