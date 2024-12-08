import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

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
    <App />
  </StrictMode>
);
