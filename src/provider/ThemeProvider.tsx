import { PropsWithChildren, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
