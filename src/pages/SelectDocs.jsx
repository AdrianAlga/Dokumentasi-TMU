import { Link } from "react-router-dom";
import "../assets/css/SelectDocs.css";

export default function SelectDocs() {
  return (
    <div className="selectdocs-container">
      <h1 className="selectdocs-title">Pilih Dokumentasi</h1>

      <div className="selectdocs-buttons">
        <Link to="/simakda" className="doc-card laravel">
          <div className="icon">💰</div>
          <span>Simakda</span>
        </Link>

        <Link to="/react" className="doc-card react">
          <div className="icon">📚</div>
          <span>Simbakda</span>
        </Link>
      </div>

      <p className="selectdocs-footer">
        Dibuat oleh <span>Adrian Alga Sakti</span>
      </p>
    </div>
  );
}
