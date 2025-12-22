import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatoPrecio } from "./utils/formatoPrecio.js";
import "./App.css";

function Pizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error("Error al cargar la pizza:", error));
  }, [id]);

  if (!pizza) {
    return <p>Cargando pizza...</p>;
  }

  return (
    <div className="pizza-page">
      <img src={pizza.img} alt={pizza.name} className="pizza-img" />
      <h2>{pizza.name}</h2>
      <p><strong>Descripción:</strong> {pizza.desc}</p>
      <p><strong>Ingredientes:</strong></p>
      <ul>
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <p><strong>Precio:</strong> ${formatoPrecio(pizza.price)}</p>
      <button>Añadir al carrito</button>
    </div>
  );
}

export default Pizza;
