import { Routes, Route } from "react-router-dom";
import LaravelRoutes from "./LaravelRoutes";
import ReactRoutes from "./ReactRoutes";
import SelectDocs from "../pages/SelectDocs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SelectDocs />} />
      {LaravelRoutes()}
      {ReactRoutes()}
    </Routes>
  );
}
