import type { ProductDetail, ProductProp } from "../../utils/types";

import Header from "../../components/header/Header";
import Product from "../../components/product/Product";

import logo from "../../assets/logo.png";
import styles from "./HomePage.module.css";
import { useState } from "react";

type HomePageProp = {
  products: ProductDetail[];
  compareList: number[];
  onAddToCompare: (id: number) => void;
};

function HomePage({ products, compareList, onAddToCompare }: HomePageProp) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query: string) => {
    // ignore casing
    setFilteredProducts(
      products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <>
      <Header logo={logo} heading="PhoneCart" onSearch={handleSearch}/>
      <main>
        <div className={styles.products_container}>
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              category={product.category}
              colors={product.colors}
              price={product.price}
              image={product.image}
              batteryLife={product.batteryLife}
              screenSize={product.screenSize}
              reviews={product.reviews}
              rating={product.rating}
              onAddToCompare={onAddToCompare}
              isComparing={compareList.includes(product.id) ? true : false}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default HomePage;
