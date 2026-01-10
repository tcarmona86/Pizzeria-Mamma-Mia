import { Link } from 'react-router-dom';


function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404 🚫</h1>
      <h2>¡Ups! Página no encontrada</h2>
      <p>
        La página que buscas no existe o ha sido movida.
      </p>
      <Link to="/" className="home-link">
        ⬅ Volver al Home
      </Link>
    </div>
  );
}

export default NotFound;
