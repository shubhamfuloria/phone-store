import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import type { ProductDetail } from "./utils/types";

import data from "./assets/data.json";

import HomePage from "./pages/homepage/HomePage";

function App() {
  const [products, setProducts] = useState<ProductDetail[]>(data);
  const [compareList, setCompareList] = useState<number[]>([]);

  console.log(compareList);

  const handleAddToCompare = (id: number) => {
    if(compareList.includes(id)) handleRemoveFromCompare(id);
    else setCompareList([...compareList, id]);
  };

  const handleRemoveFromCompare = (id: number) => {
    setCompareList(compareList.filter((i) => i != id));
  };

  return (
    <HomePage
      products={products}
      onAddToCompare={handleAddToCompare}
      onRemoveFromCompare={handleRemoveFromCompare}
      compareList={compareList}
    />
  );
}

export default App;
