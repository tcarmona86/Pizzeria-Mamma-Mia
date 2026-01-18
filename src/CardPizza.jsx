import { formatoPrecio } from './utils/formatoPrecio.js'
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

function CardPizza({ id,name, ingredientes, precio, imagen }) {
  const { addToCart } = useContext(CartContext); 
  return (
    <div className="card-pizza">
      <img src={imagen} alt={name} className="pizza-img" />
      <h3 className="pizza-name">{name}</h3>
      <p className="pizza-price"><strong>Precio:</strong> ${formatoPrecio(precio)}</p>
      <h4>Ingredientes:</h4>
      <ul className="pizza-ingredients">
        {ingredientes.map((ing, index) => (
          <li key={index}> {ing.charAt(0).toUpperCase() + ing.slice(1)}
          </li>
        ))}
      </ul>
      <div className="pizza-buttons">
        <Link to={`/pizza/${id}`} className="btn-ver">Ver Más</Link>
        <button onClick={() => addToCart({ id, name, precio, ingredientes, imagen })}>
          Añadir
        </button>
      </div>
    </div>
  )
}

export default CardPizza