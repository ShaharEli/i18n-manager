import React, { useEffect, useState } from "react";
import TranslationsList from "../../components/TranslationsList/TranslationsList";
import { API_URL, getResults } from "../../utils";

const fetchData = async () => {
  const data = await fetch(API_URL);
  return data.json();
};

export default function Home() {
  const [data, setData] = useState(null);
  const [results, setResults] = useState(null);
  const [filteredResults, setFilteredResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isNested, setNested] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData();
        if (data.error) return setError(data.error);
        setData(data);
        const { localesFiles, strippedFilesNames } = data;
        const formattedResults = getResults(
          localesFiles,
          strippedFilesNames,
          setNested
        );
        console.log(formattedResults);
        setResults(formattedResults);
        setFilteredResults(formattedResults);
      } catch ({ message }) {
        setError(message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div>loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      <TranslationsList results={results} />
    </div>
  );
}
