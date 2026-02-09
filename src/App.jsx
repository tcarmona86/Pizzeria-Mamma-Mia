import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Cart from "./Cart";
import Pizza from "./Pizza";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";
import { UserProvider } from "./context/UserContext"; 
import { CartProvider } from "./context/CartContext";
import RedirectIfAuth from "./RedirectIfAuth"; 

function App() {
  return (
    <UserProvider> 
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/login" 
              element={
                <RedirectIfAuth>
                  <Login />
                </RedirectIfAuth>
              } 
            />
            <Route 
              path="/register" 
              element={
                <RedirectIfAuth>
                  <Register />
                </RedirectIfAuth>
              } 
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Router>
      </CartProvider> 
    </UserProvider> 
  ); 
} 

export default App;
