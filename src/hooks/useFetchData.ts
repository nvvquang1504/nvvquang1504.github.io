import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../store/services/api.ts";

export const useFetchData = (endpoint: string) => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    fetchDataFromApi(endpoint)
      .then((rs) => {
        setData(rs);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      setData(undefined);
    };
  }, [endpoint]);

  return { data };
};
