import { useContext } from "react";
import { PizzaContext } from "./context/PizzaContext";
import CardPizza from "./CardPizza";
import Header from "./Header";

function Home() {
  const { pizzas, loading } = useContext(PizzaContext);

  if (loading) return <p>Cargando pizzas...</p>;

  return (
    <main className="home">
      <Header />
      <div className="pizza-grid">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            precio={pizza.price}
            ingredientes={pizza.ingredients}
            imagen={pizza.img}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
