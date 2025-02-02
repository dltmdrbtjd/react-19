import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./pages/App.tsx";
import Transition from "./pages/Transition.tsx";
import ActionState from "./pages/ActionState.tsx";
import Optimistic from "./pages/Optimistic.tsx";
import Use from "./pages/Use.tsx";

// Before
// import {render} from 'react-dom';
// render(<App />, document.getElementById('root'));

// After createRoot
createRoot(document.getElementById("root")!, {
  onCaughtError(error, errorInfo) {
    console.error("Caught error:", error, errorInfo);
    // 여기서 수집된 에러는 전역으로 에러 처리하는 로직을 넣거나 toast message 등등 활용가능할듯
  },
  onUncaughtError(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    // 여기서 수집된거는 서버나 모니터링 서비스에 전송하는 추가 로직을 넣어도 괜찮을듯
  },
}).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/transition" element={<Transition />} />
        <Route path="/action-state" element={<ActionState />} />
        <Route path="/optimistic" element={<Optimistic />} />
        <Route path="/use" element={<Use />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// Before hydrate
// import {hydrate} from 'react-dom';
// hydrate(<App />, document.getElementById('root'));

// After hydrateRoot
// import { hydrateRoot } from "react-dom/client";
// hydrateRoot(document.getElementById("root"), <App />);
