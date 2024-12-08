import { NavLink } from "react-router";
import "../styles/App.css";

function App() {
  return (
    <nav className="nav">
      <NavLink to="/transition">Go to useTransition Case</NavLink>
      <NavLink to="/action-state">Go to useActionState Case</NavLink>
    </nav>
  );
}

export default App;
