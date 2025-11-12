import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes /> {/* <Routes> sudah ada di dalam AppRoutes */}
    </BrowserRouter>
  );
}
