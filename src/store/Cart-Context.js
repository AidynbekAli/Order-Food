import { createContext, useState } from "react";

export const cartContext = createContext({
  items: [],
  totalAmount: 0,
  amount: 0,
});

const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);

  const amount = cartState.reduce((prev, current) => prev + current.amount, 0);
  const totalPrice = cartState.reduce((prev, current) => prev + current.price*current.amount, 0);

  function addItem(data) {
    if (!cartState.length) {
      return setCartState([data]);
    }

    const isExist = cartState.find((item) => item.title === data.title);

    if (!isExist) {
      return setCartState([...cartState, data]);
    }
    const updateditem = cartState.map((item) => {
      if (item.id === data.id) {
        return {
          ...item,
          amount: item.amount + data.amount,
        };
      }
      return item;
    });
    setCartState([...updateditem]);
  }
  console.log(cartState);

  function increment(id) {
    const updateditem = cartState.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount + 1,
        };
      }
      return item;
    });
    setCartState([...updateditem]);
  }
  function decrement(id) {
    const updateditem = cartState.map((item) => {
      if (item.id === id&&item.amount !==0) {
        return {
          ...item,
          amount: item.amount - 1,
        };
      }
      return item;
    });
    setCartState([...updateditem]);
  }
  const cartValue = {
    items: cartState,
    addItem,
    totalAmount: amount,
    totalPrice: totalPrice,
    increment,
    decrement,
  };
  return (
    <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
  );
};

export default CartProvider;
