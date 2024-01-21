import ReactDOM from "react-dom/client";
import { RouterProvider } from "./Router.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider />
  </ThemeProvider>
);
