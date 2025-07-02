import { createContext } from "react";
import { Theme } from "../utils/types";

const ThemeContext = createContext(Theme.LIGHT);

export default ThemeContext;