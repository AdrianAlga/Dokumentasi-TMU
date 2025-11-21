import { Route } from "react-router-dom";
import DashboardLayout from "../components/layouts/DashboardLayout";

import HomePage from "../pages/home/HomePage";
import Akuntansi from "../pages/home/Akuntansi";
import ArtisanCommand from "../pages/home/ArtisanCommand";

export default function SimakdaRoutes() {
  return (
    <Route path="/simakda" element={<DashboardLayout />}>
      <Route index element={<HomePage />} />
      <Route path="akuntansi" element={<Akuntansi />} />
      <Route path="artisan" element={<ArtisanCommand />} />
    </Route>
  );
}
