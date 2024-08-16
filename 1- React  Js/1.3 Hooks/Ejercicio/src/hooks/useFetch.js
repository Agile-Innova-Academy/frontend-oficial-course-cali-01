import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  }, [url])
  return data
}

export default useFetch;