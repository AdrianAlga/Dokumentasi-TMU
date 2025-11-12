import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function DropDown({ code, title = "Response Example", description = "", descriptionList = [], language = "json", btnCopy = true }) {
  const [isOpen, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  function copyCode() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  }

  function toggleDropdown() {
    setOpen((prev) => !prev);
  }

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>
          <strong>📋 {title}</strong>
        </span>
        <span className="dropdown-arrow">▼</span>
      </div>
      <div className="dropdown-content">
        <div className="code-paragraph">
          <p style={{ whiteSpace: "pre-line" }}>{description}</p>
        </div>
        <div className="code-block">
          <div className="code-header">
            <span className="code-language">{language}</span>
            {btnCopy && (
              <button className={copied ? "copy-btn-copied" : "copy-btn"} onClick={() => copyCode()}>
                {copied ? "Copied!" : "Copy"}
              </button>
            )}
          </div>
          <pre>
            <SyntaxHighlighter language={language} style={vscDarkPlus}>
              {code}
            </SyntaxHighlighter>
          </pre>
        </div>
        {descriptionList && descriptionList.length > 0 && (
          <div className="code-paragraph">
            <h5>Penjelasan :</h5>
            <ul>
              {descriptionList.map((item, index) => (
                <li key={index} className="description-listCommand">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
