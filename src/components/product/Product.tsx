import styles from './Product.module.css'

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
        <div>
          <h3 className={styles.title}>{name}</h3>
          <div className={styles.rating_container}>
            <span>4.3 <FaStar color='white'/></span>
            <span>5000 Review & 100 Ratings</span>
          </div>
        </div>
        <ul>
          <li>32 GB RAM</li>
          <li>Screen Size{screenSize} inch</li>
          <li>Battery Life {batteryLife} hours</li>
          <li>
            <div className='details__colors-container'>
              {colors.map(color => <span style={{background: color}}></span>)}
            </div>
          </li>
        </ul>
      </div>
      <div className="card__price-container">
        <h2>₹{price}</h2>
        <span>9999</span>
      </div>
    </div>
  );
}
