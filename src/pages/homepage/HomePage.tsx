import type { ProductDetail, ProductProp } from "../../utils/types";

import Product from "../../components/product/Product";


import styles from "./HomePage.module.css";
import { useNavigate } from "react-router";

type HomePageProp = {
  products: ProductDetail[];
  compareList: number[];
  onAddToCompare: (id: number) => void;
};

function HomePage({ products, compareList, onAddToCompare }: HomePageProp) {

  const navigate = useNavigate();

  return (
    <>
      <main>
        <div className={styles.products_container}>
          {products.map((product) => (
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
              ram={product.ram}
              camera={product.camera}
              onAddToCompare={onAddToCompare}
              isComparing={compareList.includes(product.id) ? true : false}
            />
          ))}
        </div>
        <div
          className={`${styles.compare_container} ${
            compareList.length > 0 ? styles.visible : styles.hidden
          }`}
          onClick={() => navigate('/compare')}
        >
          <button>COMPARE</button>
          <span>{compareList.length}</span>
        </div>
      </main>
    </>
  );
}

export default HomePage;
