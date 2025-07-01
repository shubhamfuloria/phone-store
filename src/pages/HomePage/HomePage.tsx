import type { ProductDetail } from "../../utils/types";

import Header from "../../components/header/Header";
import Product from "../../components/product/Product";

import logo from '../../assets/logo.png'
import styles from './HomePage.module.css'

function HomePage (props: {products: ProductDetail[]}) {
  const {products} = props;
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

export default HomePage