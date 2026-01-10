import './App.css'
import Header from './Header.jsx'
import CardPizza from './CardPizza.jsx'
import napolitana from './assets/napolitana.jpg'
import española from './assets/española.jpg'
import pepperoni from './assets/pepperoni.jpg'
import { formatoPrecio } from './utils/formatoPrecio.js'
import { useEffect, useState } from "react";


function Home({ addToCart }) {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar las pizzas:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando pizzas...</p>;

  return (
    <div className="pizza-grid">
      {pizzas.map((pizza) => (
        <CardPizza key={pizza.id} pizza={pizza} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Home;
