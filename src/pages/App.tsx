import { NavLink } from "react-router";
import "../styles/App.css";

function App() {
  return (
    <nav className="nav">
      <NavLink to="/transition" className="text-2xl">
        Go to useTransition Case
      </NavLink>
      <NavLink to="/action-state">Go to useActionState Case</NavLink>
      <NavLink to="/optimistic">Go to useOptimistic Case</NavLink>
      <NavLink to="/use">Go to use Case</NavLink>
    </nav>
  );
}

export default App;
