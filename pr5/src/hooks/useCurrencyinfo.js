import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.rates) {
          setData(res.rates);
        } else {
          setData({});
        }
      })
      .catch((error) => {
        console.log("API Error:", error);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;