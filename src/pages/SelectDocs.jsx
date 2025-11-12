import { Link } from "react-router-dom";
import "../assets/css/SelectDocs.css";

export default function SelectDocs() {
  return (
    <div className="selectdocs-container">
      <h1 className="selectdocs-title">Pilih Dokumentasi</h1>

      <div className="selectdocs-buttons">
        <Link to="/laravel" className="doc-card laravel">
          <div className="icon">🚀</div>
          <span>Laravel</span>
        </Link>

        <Link to="/react" className="doc-card react">
          <div className="icon">⚛️</div>
          <span>React</span>
        </Link>
      </div>

      <p className="selectdocs-footer">
        Dibuat dengan ❤️ oleh <span>Adrian Dev</span>
      </p>
    </div>
  );
}
