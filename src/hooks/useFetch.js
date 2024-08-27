import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!url) {
      return;
    }

    setLoading(true);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response is not ok");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
