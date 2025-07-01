import styles from "./Header.module.css";

export default function Header(props: { logo: string; heading: string }) {
  const { logo, heading } = props;

  return (
    <header className={styles.header_wrapper}>
      <div className={styles.header}>
        <div className={styles.heading_container}>
          <div className={styles.logo_container}>
            <img src={logo} alt={heading} />
          </div>
          <h2>{heading}</h2>
        </div>
        <div className={styles.search_container}>
          <input type="search" placeholder="Search Products..." />
          <button>Search</button>
        </div>
        <nav>
          <ul>
            <li>Login</li>
            <li>Cart</li>
            <li>Compare</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
