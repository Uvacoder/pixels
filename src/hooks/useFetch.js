import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState({});
  const authKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setStatus("fetching");
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: authKey,
        },
      });
      const data = await res.json();
      setData(data);
      setStatus("fetched");
      console.log("done");
    };
    fetchData();
  }, [url, authKey]);

  return [status, data];
};
