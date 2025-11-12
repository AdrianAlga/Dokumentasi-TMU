import { Route } from "react-router-dom";
import DashboardLayout from "../components/layouts/DashboardLayout";

import HomePage from "../pages/home/HomePage";
import Instalasion from "../pages/home/Installation";
import ArtisanCommand from "../pages/home/ArtisanCommand";
import Routing from "../pages/home/Routing";
import Middleware from "../pages/home/Middleware";
import Migration from "../pages/home/Migration";
import Models from "../pages/home/Models";
import Relationship from "../pages/home/Relationship";

export default function LaravelRoutes() {
  return (
    <Route path="/laravel" element={<DashboardLayout />}>
      <Route index element={<HomePage />} />
      <Route path="installation" element={<Instalasion />} />
      <Route path="artisan" element={<ArtisanCommand />} />
      <Route path="routing" element={<Routing />} />
      <Route path="middleware" element={<Middleware />} />
      <Route path="migration" element={<Migration />} />
      <Route path="models" element={<Models />} />
      <Route path="relationship" element={<Relationship />} />
    </Route>
  );
}
