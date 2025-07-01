import data from "./assets/data.json";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";


import HomePage from './pages/HomePage/HomePage';

function App() {
  const [products, setProducts] = useState<ProductDetail[]>(data);
  const product = data[0];

  return (
    <HomePage products={products}/>
  );
}

export default App;
