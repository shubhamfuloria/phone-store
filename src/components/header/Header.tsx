import { useContext, useState } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router";
import { Theme } from "../../utils/types";
import ThemeContext from "../../contexts/ThemeContext";

type HeaderProps = {
  logo: string;
  heading: string;
  onSearch: (query: string) => void;
  onThemeChange: () => void;
};

export default function Header(props: HeaderProps) {
  const { logo, heading, onSearch, onThemeChange } = props;

  const [query, setQuery] = useState("");
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <header
      className={`${styles.header_wrapper} ${
        theme === Theme.DARK ? styles.dark : ""
      }`}
    >
      <div className={styles.header}>
        <div
          className={styles.heading_container}
          onClick={() => navigate("/home")}
        >
          <div className={styles.logo_container}>
            <img src={logo} alt={heading} />
          </div>
          <h2>{heading}</h2>
        </div>
        <div className={styles.search_container}>
          <input
            type="search"
            placeholder="Search Products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={() => onSearch(query)}>Search</button>
        </div>
        <nav>
          <ul>
            <li>Login</li>
            <li>Cart</li>
            <li>Compare</li>
          </ul>
        </nav>
        <button
          className={styles.themeButton}
          style={{
            background: theme === Theme.LIGHT ? "#23272f" : "",
            color: theme === Theme.LIGHT ? "white" : "",
          }}
          onClick={onThemeChange}
        >
          {theme === Theme.LIGHT ? "DARK" : "LIGHT"}
        </button>
      </div>
    </header>
  );
}
