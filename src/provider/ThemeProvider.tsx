import { PropsWithChildren, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}

export default ThemeProvider;
