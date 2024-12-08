import { createContext, Dispatch, SetStateAction } from "react";

export const ThemeContext = createContext<{
  theme: "dark" | "light";
  setTheme: Dispatch<SetStateAction<"dark" | "light">>;
}>({ theme: "dark", setTheme: () => {} });
