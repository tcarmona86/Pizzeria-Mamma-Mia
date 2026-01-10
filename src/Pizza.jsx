import { useEffect, useState } from "react";

function Pizza() {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => {
        setPizza(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar la pizza:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando pizza...</p>;
  if (!pizza) return <p>No se encontró la pizza.</p>;

  return (
    <div className="pizza-detail">
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} className="pizza-img" />
      <p><strong>Precio:</strong> ${pizza.price}</p>
      <p><strong>Descripción:</strong> {pizza.desc}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pizza;
