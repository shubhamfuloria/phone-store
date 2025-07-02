import ComparisonCard from "../../components/comparisoncard/ComparisonCard";
import type { ProductDetail } from "../../utils/types";
import styles from "./ComparisonPage.module.css";

function ComparisonPage(props: { products: ProductDetail[] }) {
  const { products } = props;

  const maxRam = products.reduce((prev, { ram }) => {
    const currMax = ram.reduce((p, r) => Math.max(p, r), 0);
    return Math.max(currMax, prev);
  }, 0);

  const maxScreen = products.reduce(
    (prev, product) => Math.max(product.screenSize, prev),
    0
  );
  const maxBattery = products.reduce(
    (prev, product) => Math.max(product.batteryLife, prev),
    0
  );
  const maxCamera = products.reduce(
    (prev, product) => Math.max(product.camera, prev),
    0
  );

  return (
    <main className={styles.main}>
      <h2>Comparing Products</h2>
      <div className={styles.comparisoncard_container}>
        {products.map((product) => (
          <ComparisonCard
            product={product}
            isMaxScreen={maxScreen === product.screenSize}
            isMaxBattery={maxBattery === product.batteryLife}
            isMaxCamera={maxCamera === product.camera}
            isMaxRam={product.ram.includes(maxRam)}
          />
        ))}
      </div>
    </main>
  );
}

export default ComparisonPage;
