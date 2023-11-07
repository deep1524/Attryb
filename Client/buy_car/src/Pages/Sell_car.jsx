import React, { useState, useRef, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import Navbar from "../Components/Navbar";
import("./Sell_car.css");
const Sell_car = () => {
  const [data, setData] = useState([]);
  const searchRef = useRef(null);
  const [queryString, setQueryString] = useState("");
  const getdata = () => {
    fetch(`https://attryb-vlos.onrender.com/oemspec/?${queryString}`)
      .then((response) => response.json())
      .then((data) => setData(data.data), console.log(data))
      .catch((error) => console.error(error));
  };
  console.log(queryString);
  const handleSearch = () => {
    let url = "";
    if (searchRef.current?.value) url += `q=${searchRef.current?.value}`;
    setQueryString(url);
  };
  useEffect(() => {
    getdata();
  }, [queryString]);

  return (
    <>
    <Navbar/>
   
    <div className="sellCar">
      <div className="queryContainer">
        <div className="searchContainer">
          <input type="search" ref={searchRef} placeholder="Search here!" />
          <span className="bs-search">
            <BsSearch onClick={handleSearch} />
          </span>
        </div>
      </div>
      <div className="oemSpecsContainer">
        <table>
          <caption>Original Equipment Manufacturers Specifications</caption>
          <thead>
            <tr>
              <th>Sr no</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Year</th>
              <th>List-Price</th>
              <th>Colors</th>
              <th>Mileage</th>
              <th>Power (in BHP)</th>
              <th>Max-speed</th>
              <th>Choose</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((el, indx) => (
              <tr key={el._id}>
                <td>{indx + 1}</td>
                <td>{el?.brand}</td>
                <td>{el?.model}</td>
                <td>{el?.year}</td>
                <td>{el?.listPrice}</td>
                <td>
                  {el?.colors?.map((ele, i) => (
                    <span
                      key={i}
                      style={{
                        height: "20px",
                        width: "20px",
                        border: "1px solid gray",
                        borderRadius: "50%",
                        backgroundColor: ele.toLowerCase(),
                        display: "inline-block",
                        marginRight: "5px",
                      }}
                    ></span>
                  ))}
                </td>
                <td>{el?.mileage}</td>
                <td>{el?.power}</td>
                <td>{el?.maxSpeed}</td>
                <td>
                  <button onClick={() => {}}>Choose OEM</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Sell_car;
