import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <div className="container">
        {/*  Sidebar */}
        <Sidebar />
        <main className="main-content">
          {/* content */}
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
