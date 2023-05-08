import { useState } from "react";
import "./App.css";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import MealSummary from "./components/meal-summary/MealSummary";
import Meals from "./components/meals/Meals";
import CartProvider from "./store/Cart-Context";

function App() {
  const [toggle, setToggle]= useState(false)

  function toggleHandler() {
    setToggle((prev)=>!prev)
  }
  return (
    <CartProvider>
      <Header onToggle={toggleHandler} />
      <MealSummary />
      <Meals />
      {toggle && <Basket onToggle={toggleHandler}/>}
 
    </CartProvider>
  );
}

export default App;
