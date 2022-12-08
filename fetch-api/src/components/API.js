import React, { useEffect, useState } from "react";

const UsingFetch = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchLocation = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setData(data);
      console.log(data);
    };
    fetchLocation();
  }, []);

  return (
    <div>
      {data.length > 0 && (
        <div className="abc">
          {data.map((item) => (
            <div className="container" key={item.id}>
              <h4>{item.title}</h4> <br />
              <img src={item.image} /> <br />
              <h5> Price : ₹{item.price}</h5>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsingFetch;
