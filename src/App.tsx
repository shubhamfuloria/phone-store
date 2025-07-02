import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { toast, ToastContainer } from "react-toastify";

import { Theme, type ProductDetail } from "./utils/types";

import data from "./assets/data.json";
import logo from "./assets/logo.png";

import HomePage from "./pages/homepage/HomePage";
import ComparisonPage from "./pages/comparisonpage/ComparisonPage";
import Header from "./components/header/Header";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  const [products, setProducts] = useState<ProductDetail[]>(data);
  const [compareList, setCompareList] = useState<number[]>([]);
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  useEffect(() => {
    const compareString = localStorage.getItem("compare-list");
    if (!compareString) return;

    const list = JSON.parse(compareString);
    if (Array.isArray(list)) {
      setCompareList(list);
    }
  }, []);

  useEffect(() => {
    if (compareList.length == 0) return;
    localStorage.setItem("compare-list", JSON.stringify(compareList));
  }, [compareList]);

  const handleAddToCompare = (id: number) => {
    if (compareList.includes(id)) handleRemoveFromCompare(id);
    else if (compareList.length >= 3)
      toast.error("You can only compare 3 products at a time!", {
        theme: "dark",
      });
    else setCompareList([...compareList, id]);
  };

  const handleRemoveFromCompare = (id: number) => {
    setCompareList(compareList.filter((i) => i != id));
  };

  const handleSearch = (query: string) => {
    // ignore casing
    setProducts(
      data.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    );
  };

  const handleThemeChange = () => {
    setTheme((prev) => (prev == Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  return (
    <BrowserRouter>
      <ThemeContext value={theme}>
        <Header
          logo={logo}
          heading="PhoneCart"
          onSearch={handleSearch}
          onThemeChange={handleThemeChange}
        />
        <ToastContainer />
        <Routes>
          <Route
            path="/home"
            element={
              <HomePage
                products={products}
                onAddToCompare={handleAddToCompare}
                compareList={compareList}
              />
            }
          />
          <Route
            path="/compare"
            element={
              <ComparisonPage
                products={products.filter((product) =>
                  compareList.includes(product.id)
                )}
                onRemoveFromComparison={handleRemoveFromCompare}
              />
            }
          />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </ThemeContext>
    </BrowserRouter>
  );
}

export default App;
