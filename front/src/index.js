import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { createRoot } from "react-dom/client";
const app = document.getElementById("app");
const root = createRoot(app);
root.render(<App />);
