// In this file we'll be using custom hooks and explore how hooks works manually
// Hooks are nothing but the function

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/%7Bcurrency%7D.json`
    )
      .then((response) => response.json)
      .then((response) => setData(response[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
