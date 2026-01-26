import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatoPrecio } from "./utils/formatoPrecio.js";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

function Pizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPizza(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar la pizza:", error);
        setLoading(false);
      });
  }, [id]);
  if (loading) return <p>Cargando pizza...</p>;
  if (!pizza) return <p>Pizza no encontrada.</p>;
  return (
    <div className="pizza-detail">
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} className="pizza-img" />
      <p><strong>Precio:</strong> ${formatoPrecio(pizza.price)}</p>
      <p><strong>Descripción:</strong> {pizza.desc}</p>
      <h3>Ingredientes:</h3>
      <ul> {pizza.ingredients.map((ing, i) => (
        <li key={i}>{ing.charAt(0).toUpperCase() + ing.slice(1)}</li>
      ))}
      </ul>
      <button onClick={() => addToCart({
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
        img: pizza.img,
        ingredientes: pizza.ingredients
      })}>
        Añadir al carrito
      </button>

    </div>);
} export default Pizza;