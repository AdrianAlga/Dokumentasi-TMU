import { Route } from "react-router-dom";

export default function ReactRoutes() {
  return (
    <Route path="/react">
      {/* halaman index /react */}
      <Route
        index
        element={<h1 style={{ textAlign: "center", marginTop: "40px" }}>React Documentation Coming Soon 🚧</h1>}
      />
      {/* nanti bisa tambahkan sub-route lain seperti /react/hooks, /react/state, dll */}
    </Route>
  );
}
