import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProviderContext from "./Contexts/UserProviderContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProviderContext>
      <App />
    </UserProviderContext>
  </StrictMode>
);
