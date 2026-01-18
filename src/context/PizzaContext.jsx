import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

export function PizzaProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas") 
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar las pizzas:", error);
        setLoading(false);
      });
  }, []);

  const getPizzaById = (id) => pizzas.find((pizza) => pizza.id === id);

  return (
    <PizzaContext.Provider value={{ pizzas, loading, getPizzaById }}>
      {children}
    </PizzaContext.Provider>
  );
}
