import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeButtons() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <button
        style={{ border: theme === "dark" ? "1px solid white" : "none" }}
        onClick={() => setTheme("dark")}
      >
        Light Heading
      </button>
      <button
        style={{ border: theme === "light" ? "1px solid white" : "none" }}
        onClick={() => setTheme("light")}
      >
        Dark Heading
      </button>
    </div>
  );
}

export default ThemeButtons;
