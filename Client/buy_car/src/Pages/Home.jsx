import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [data, setData] = useState([]);
  const[query,setQuery] = useState("");
  const getdata = () => {
    fetch(`http://localhost:8080/car/${query}`)
      .then((response) => response.json())
      .then((data) => setData(data), console.log(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getdata();
  }, [query]);

  const handlechange=(q)=>{
    setQuery(`?sort=${q}`);
  }

  return (
    <>
    <Navbar/>
   
    <div>
      <div>
        <label className="mr-10 font-bold">Price</label>
        <select defaultValue="option" onChange={(e)=>handlechange(e.target.value)}>
        <option value="option">Select</option>
          <option value="Low to High">Low to High</option>
          <option value="High to Low">High to Low</option>
        </select>
      </div>

      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Home;
