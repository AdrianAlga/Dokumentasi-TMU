import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sidebar" id="sidebar">
      <div className="logo">
        <h1>📚 Laravel Docs</h1>
      </div>

      {/* Tombol kembali ke halaman utama */}
      <div className="nav-section mb-4">
        <NavLink
          to="/"
          className="nav-item back-button"
        >
          ⬅️ Pilih Dokumentasi
        </NavLink>
      </div>

      <div className="nav-section">
        <h3>Getting Started</h3>

        <NavLink
          to=""
          end
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          Introduction
        </NavLink>

        <NavLink to="akuntansi" className="nav-item">
          Alur Akuntansi
        </NavLink>

        <NavLink to="artisan" className="nav-item">
          Artisan Commands
        </NavLink>

      </div>

      {/* <div className="nav-section">
        <h3>Mini Project</h3>
        <a href="#auth-overview" className="nav-item">
          Overview
        </a>
      </div> */}
    </nav>
  );
}

export default Sidebar;
