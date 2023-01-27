import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import CryptoContext from "./Component/CryptoContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </StrictMode>
);
