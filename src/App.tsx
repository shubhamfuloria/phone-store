import type { ProductDetail } from "./utils/types";

import { useState } from "react";
import styles from "./App.module.css";
import data from "./assets/data.json";
import Product from "./components/product/Product";
import Header from "./components/header/Header";
import logo from './assets/logo.png'

function App() {
  const [products, setProducts] = useState<ProductDetail[]>(data);
  const product = data[0];

  return (
    <>
    <Header logo={logo} heading="PhoneCart"/>
    <main>
    <div className={styles.products_container}>
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
    </main>
    </>
  );
}

export default App;
