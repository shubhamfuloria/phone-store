import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";
import Product from "./components/product/Product";
import type { ProductDetail } from "./utils/types";

function App() {
  const [products, setProducts] = useState<ProductDetail[]>(data);
  const product = data[0];

  return (
    <div style={{ padding: "1rem 3rem", display: 'flex', flexWrap: 'wrap', margin: 'auto' }}>
      {products.map((product) => (
        <Product
          name={product.name}
          brand={product.brand}
          category={product.category}
          colors={product.colors}
          price={product.price}
          image={product.image}
          batteryLife={product.batteryLife}
          screenSize={product.screenSize}
        />
      ))}
    </div>
  );
}

export default App;
