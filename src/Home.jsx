import { useState, useEffect } from "react";
import './App.css'
import Header from './Header.jsx'
import CardPizza from './CardPizza.jsx'
import { formatoPrecio } from "./utils/formatoPrecio.js";
import { Link } from "react-router-dom";


function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error al cargar pizzas:", error));
  }, []);
  return (
    <main className="home">
      <Header />
      <div className="pizza-grid">
        {pizzas.map((pizza) => (
          <Link key={pizza.id} to={`/pizza/${pizza.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <CardPizza 
              id={pizza.id}
              nombre={pizza.name}
              descripcion={pizza.desc}
              precio={pizza.price}
              ingredientes={pizza.ingredients}
              img={pizza.img}
            />
            </Link>
          ))}
      </div>
    </main>
  );
}

export default Home;
