import { Routes, Route } from "react-router-dom";
import SimakdaRoutes from "./SimakdaRoutes";
import ReactRoutes from "./ReactRoutes";
import SelectDocs from "../pages/SelectDocs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SelectDocs />} />
      {SimakdaRoutes()}
      {ReactRoutes()}
    </Routes>
  );
}
