import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CardCode({ code, language = "bash", title = "Code", btnCopy = true }) {
  const [copied, setCopied] = useState(false);
  function copyCode() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  }

  return (
    <>
      <div className="code-block">
        <div className="code-header">
          <span className="code-language">{title}</span>
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
    </>
  );
}
