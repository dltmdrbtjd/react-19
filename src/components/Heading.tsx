import { PropsWithChildren, use } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Heading({ children }: PropsWithChildren) {
  if (!children) return null;

  const { theme } = use(ThemeContext);

  return (
    <h1 style={{ color: theme === "dark" ? "white" : "black" }}>{children}</h1>
  );
}

export default Heading;
