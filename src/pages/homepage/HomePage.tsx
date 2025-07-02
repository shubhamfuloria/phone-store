import { Theme, type ProductDetail } from "../../utils/types";

import Product from "../../components/product/Product";


import styles from "./HomePage.module.css";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

type HomePageProp = {
  products: ProductDetail[];
  compareList: number[];
  onAddToCompare: (id: number) => void;
};

function HomePage({ products, compareList, onAddToCompare }: HomePageProp) {

  const navigate = useNavigate();

  const handleNavigateToComparisonPage = () => {
    if(compareList.length < 2) {
      toast.error("Please add at least 2 items to compare list", {theme: 'dark'})
      return;
    }

    navigate('/compare')
  }

  const theme = useContext(ThemeContext);


  return (
    <>
      <main className={`${theme === Theme.DARK ? styles.dark : ''}`}>
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
          onClick={handleNavigateToComparisonPage}
        >
          <button>COMPARE</button>
          <span>{compareList.length}</span>
        </div>
      </main>
    </>
  );
}

export default HomePage;
