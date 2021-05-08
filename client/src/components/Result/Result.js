import React from "react";

export default function Result({ result }) {
  return (
    <div style={{ display: "flex" }}>
      <div>key: {result.key}</div>
      {Object.keys(result.translations).map((lang) => (
        <div style={{ marginLeft: 5 }} key={lang}>
          {lang} translation:{result.translations[lang]}
        </div>
      ))}
    </div>
  );
}
