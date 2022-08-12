import { createContext } from "react";

const ThemeContext = createContext("green", () => {}); // Similar to useState hook. [theme, setTheme]

export default ThemeContext;
