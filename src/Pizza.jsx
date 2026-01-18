import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PizzaContext } from "./context/PizzaContext";
import { formatoPrecio } from "./utils/formatoPrecio.js";

function Pizza() {
  const { id } = useParams();
  const { getPizzaById } = useContext(PizzaContext);

  const pizza = getPizzaById(id);

  if (!pizza) return <p>Pizza no encontrada.</p>;

  return (
    <div className="pizza-detail">
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p><strong>Precio:</strong> ${formatoPrecio(pizza.price)}</p>
      <p><strong>Descripción:</strong> {pizza.desc}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {pizza.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>
    </div>
  );
  
}

export default Pizza;
