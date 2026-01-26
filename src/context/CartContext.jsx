import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  const addToCart = (pizza) => {
    const exists = cart.find((p) => p.id === pizza.id);
    if (exists) {
      setCart(
        cart.map((p) =>
          p.id === pizza.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };


  const removeFromCart = (id) => {
    const exists = cart.find((p) => p.id === id);
    if (!exists) return;
    if (exists.cantidad === 1) {
      setCart(cart.filter((p) => p.id !== id));
    } else {
      setCart(
        cart.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    }
  };


  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
