import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function ListCommand({ code, description = "", title = "", descriptionList = [], language = "bash" }) {
  const [isOpen, setOpen] = useState(false);
  const [isCopied, setCopied] = useState(false);

  function toggleDropdown() {
    setOpen((prev) => !prev);
  }

  function copyCode() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  }

  return (
    <div className="command-section">
      <div className="command-header" onClick={toggleDropdown}>
        <span className={`dropdown-arrow ${isOpen ? "rotated" : ""}`} id="server-arrow">
          ▶
        </span>
        <span className="command-title">{title}</span>
      </div>
      <div className={`command-content ${isOpen ? "active" : ""}`} id="server-content">
        {code && (
          <div className="code-block-command">
            <div className="code-header-command">
              <span className="language-tag">PHP</span>
              <button className="copy-btn-command" onClick={() => copyCode()}>
                {isCopied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="code">
              <SyntaxHighlighter language={language} style={vscDarkPlus}>
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
        <p className="description-paragraph">{description}</p>
        {descriptionList && descriptionList.length > 0 && (
          <ul>
            {descriptionList.map((item, index) => (
              <li key={index} className="description-listCommand">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ListCommand;
