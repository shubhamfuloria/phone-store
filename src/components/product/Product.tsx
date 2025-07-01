import styles from "./Product.module.css";

import type { ProductDetail } from "../../utils/types";

import { FaStar } from "react-icons/fa";

export default function Product(props: ProductDetail) {
  const {
    name,
    brand,
    category,
    colors,
    price,
    image,
    batteryLife,
    screenSize,
  } = props;

  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <img src={image} alt={name} />
      </div>
      <div className="card__details">
        <div className={styles.title_container}>
          <h3 className={styles.title}>{name}</h3>
          <div className={styles.rating_container}>
            <span>
              4.3 <FaStar color="golden" />
            </span>
            <span>5000 Review</span>
          </div>
        </div>
        <ul className={styles.featureList}>
          <li>
            <span>RAM</span>
            <span>{32} GB</span>
          </li>
          <li>
            <span>Screen Size</span>
            <span>{screenSize}"</span>
          </li>
          <li>
            <span>Battery Life</span>
            <span> {batteryLife} hours</span></li>
          <li>
            <span>Colors</span>
            <div className="details__colors-container">
              {colors.map((color) => (
                <span style={{ background: color }}></span>
              ))}
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.price_container}>
        <h2>₹{price}</h2>
        <button>+ Add to Compare</button>
      </div>
    </div>
  );
}
