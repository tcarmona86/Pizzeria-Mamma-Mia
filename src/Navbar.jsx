import './App.css'
import { formatoPrecio } from './utils/formatoPrecio.js'
import { FaHome, FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'


function Navbar() {
  const total = 25000
  const token = false

  return (
    <nav className="navbar">
      <ul className='nav-menu'>
        <li>Pizzería Mamma Mía!</li>
        <li><Link to="/" className="nav-btn"><FaHome />Home</Link></li>
        <li><Link to="/register" className="nav-btn">Register</Link></li>
        <li><Link to="/login" className="nav-btn">Login</Link></li>
        <li><Link to="/pizza/p001" className="nav-btn">Pizza</Link></li>
        <li><Link to="/profile" className="nav-btn">Profile</Link></li>
      </ul>
      <Link to="/cart" className="cart-total">
        Total: ${formatoPrecio(total)}
      </Link>
    </nav>
  )
}

export default Navbar

