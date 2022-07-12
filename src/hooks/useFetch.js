import React, { useState, useEffect } from "react";
 
const useFetch = (url ) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(url ); 
        setResponse(url);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
  }, []);
return { response, error, loading };
};
export default useFetch;