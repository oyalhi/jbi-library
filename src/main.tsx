import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/app.tsx";
import { addBigData } from "./utils/add-big-data.ts";

import "./index.scss";

addBigData(300, 100_000);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
