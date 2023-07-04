import React from 'react';
import './App.css';
import { useState } from "react";
import StockList from './components/StockList/StockList';
import Cart from './components/Cart/Cart';

const App = () => {
  const stock = [
    { name: "Apple", price: 1 },
    { name: "Banana", price: 2 },
    { name: "Peach", price: 3 },
    { name: "Pear", price: 4 }
  ];

  const [cart, setCart] = useState<{ name: string, price: number }[]>([]);

  return (
    <div className="app">
      <StockList cart={cart} setCart={setCart} stock={stock} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default App;
