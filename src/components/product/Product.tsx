import styles from "./Product.module.css";

import type { ProductDetail } from "../../utils/types";

import { FaStar } from "react-icons/fa";

export type ProductProp = ProductDetail & {
  isComparing: boolean;
  onAddToCompare: (id: number) => void;
  // onRemoveFromCompare: (id: number) => void; we don't need this anymore
};

export default function Product(props: ProductProp) {
  const {
    id,
    name,
    brand,
    category,
    colors,
    price,
    image,
    batteryLife,
    screenSize,
    rating,
    reviews,
    isComparing,
    onAddToCompare,
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
              {rating} <FaStar color="golden" />
            </span>
            <span>{reviews} Review</span>
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
            <span> {batteryLife} hours</span>
          </li>
          <li>
            <span>Colors</span>
            <div className={styles.colors_container}>
              {colors.map((color) => (
                <span style={{ background: color }}></span>
              ))}
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.price_container}>
        <h2>₹{price}</h2>
        <button
          onClick={() => onAddToCompare(id)}
          style={{ background: isComparing ? "#50C878" : "" }}
        >
          {isComparing ? "Added To Compare" : "+ Add To Compare"}
        </button>
      </div>
    </div>
  );
}
