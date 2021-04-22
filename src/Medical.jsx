import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Medical.css";
import Card from "./Card";
function Medical() {
  const url = "https://powerful-hamlet-56463.herokuapp.com/api/v1/resources";
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, []);

  if (product)
    return (
      <div className="medical-data">
        <div className="parent-card" style={{ display: "flex" }}>
          {product.data[0].map((value) => {
            return (
              <>
                <Card name={value.name} address={value.address} />
              </>
            );
          })}
        </div>
      </div>
    );
  return <div></div>;
}

export default Medical;
