import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]); // Default to an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const abortController = new AbortController(); // Create an abort controller
    const { signal } = abortController;

    setLoading(true);
    setError(null); // Reset error on new fetch

    fetch(url, { signal }) // Pass the signal to fetch
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          // Check if the error was caused by abort
          setError(error.message);
        }
        setLoading(false);
      });

    return () => {
      abortController.abort(); // Clean up the fetch
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
