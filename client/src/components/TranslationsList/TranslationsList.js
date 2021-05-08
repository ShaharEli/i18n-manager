import React from "react";
import Result from "../Result/Result";

export default function TranslationsList({ results }) {
  return (
    <div>
      {results.map((result) => (
        <Result key={result.key} result={result} />
      ))}
    </div>
  );
}
