import "./App.css";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Phone from "./components/Phone";

function App() {
  const [data, setData] = useState([]);
  const [prevData, setPrevData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((response) => {
        const products = response?.products;
        setLoading(false);
        setPrevData(products);
        setData(products);
      });
  }, []);

  const onChange = useCallback(
    (e) => {
      const value = e.target.value?.trim();
      if (value === "") {
        setData(prevData);
      } else {
        setData((prev) =>
          prev?.filter((item) => {
            return item?.title?.includes(value);
          })
        );
      }
    },
    [data]
  );

  return (
    <div className="App">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <div className="searchbox">
            <div className="search">
              <input
                placeholder="search heare..."
                className="search--input"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="Phones">
            {data?.map((phone) => (
              <Phone phone={phone} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
