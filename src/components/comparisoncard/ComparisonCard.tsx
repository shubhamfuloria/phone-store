import { FaStar } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";

import type { ProductDetail } from "../../utils/types";
import styles from "./ComparisonCard.module.css";

type ComparisonCardProp = {
  product: ProductDetail;
  isMaxScreen: boolean;
  isMaxBattery: boolean;
  isMaxCamera: boolean;
  isMaxRam: boolean;
};

function ComparisonCard(props: ComparisonCardProp) {
  const { product, isMaxBattery, isMaxScreen, isMaxCamera, isMaxRam } = props;
  const { ram, camera, batteryLife, screenSize, colors, price } = product;

  return (
    <div className={styles.comparison_container}>
      <div className={styles.heading_container}>
        <div className={styles.image_container}>
          <img src={product.image} alt={product.name} />
        </div>
        <h4>{product.name}</h4>
        <span style={{ color: "grey", fontWeight: "bold" }}>
          {product.brand}
        </span>
        <h2 style={{ color: "green" }}>₹ {price}</h2>
      </div>

      <ul className={styles.featureList}>
        <li>
          <div className={styles.rating_container}>
            <span>
              {product.rating} <FaStar color="golden" />
            </span>
            <span>{product.reviews} Review</span>
          </div>
        </li>
        <li>
          {/* <span style={{ fontWeight: "bold" }}>
            Colors ({product.colors.length}) :
          </span> */}
          <div className={styles.colors_container}>
            {colors.map((color, index) => (
              <span key={index} style={{ background: color }}></span>
            ))}
          </div>
        </li>
        <li style={{ background: isMaxRam ? "lightgreen" : "", color: isMaxRam ? 'green' : '' }}>
          {ram.map((r, i) => (
            <span>
              {r} GB {i !== ram.length - 1 && ","}
            </span>
          ))}
        </li>
        <li style={{ background: isMaxCamera ? "lightgreen" : "", color: isMaxCamera ? 'green' : '' }}>{camera} Megapixels</li>
        <li style={{ background: isMaxBattery ? "lightgreen" : "", color: isMaxBattery ? 'green' : '' }}>
          {batteryLife} days
        </li>
        <li style={{ background: isMaxScreen ? "lightgreen" : "", color: isMaxScreen ? 'green' : '' }}>{screenSize} Inches</li>
      </ul>
      <div className={styles.addCart_container}>
        <button>
          <AiFillThunderbolt />
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  );
}

export default ComparisonCard;
