import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Navbar";
const Dealer_ADD_CAR = () => {
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [maxSpeed, setmaxSpeed] = useState("");
  const [mileage, setMileage] = useState("");
  const [power, setPower] = useState("");
  const [colors, setColors] = useState("");

  const addData = (e) => {

    console.log("in")
    const payload = {
      image,
      brand,
      model,
      price,
      maxSpeed,
      mileage,
      power,
      colors,
    };

    console.log(payload);
    fetch("https://attryb-vlos.onrender.com/car/add", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
     
      })
    
      .catch((err) => console.log(err));
      alert("car added successfully")
      toast(" car added successfully");
    //   window.location.reload();
  };
  return (
    <>
    <Navbar/>
    <ToastContainer/>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          DEALER ADD SECOND HAND CAR
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6"  >
        <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image
              </label>
            </div>
            <div className="mt-2">
              <input
                id="image"
                name="image"
                type="url"
                autoComplete="image"
                required
                value={image}
                onChange={(e)=>setImage(e.target.value)}
                className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* 2 */}

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Brand
              </label>
            </div>
            <div className="mt-2">
              <input
                id="brand"
                name="barand"
                type="text"
                autoComplete="brand"
                required
                value={brand}
                onChange={(e)=>setBrand(e.target.value)}
                className=" p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
{/* 3  */}
<div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Model
              </label>
            </div>
            <div className="mt-2">
              <input
                id="model"
                name="model"
                type="text"
                autoComplete="model"
                required
                value={model}
                onChange={(e)=>setModel(e.target.value)}
                className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* 4 */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
            </div>
            <div className="mt-2">
              <input
                id="price"
                name="price"
                type="number"
                autoComplete="price"
                required
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* 5 */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Max Speed
              </label>
            </div>
            <div className="mt-2">
              <input
                id="maxSpeed"
                name="maxSpeed"
                type="number"
                autoComplete="maxSpeed"
                required
                value={maxSpeed}
                onChange={(e)=>setmaxSpeed(e.target.value)}
                className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* 6 */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mileage
              </label>
            </div>
            <div className="mt-2">
              <input
                id="mileage"
                name="mileage"
                type="number"
                autoComplete="brand"
                required
                value={mileage}
                onChange={(e)=>setMileage(e.target.value)}
                className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* 7 */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Power
              </label>
            </div>
            <div className="mt-2">
              <input
                id="power"
                name="power"
                type="number"
                autoComplete="power"
                required
                value={power}
                onChange={(e)=>setPower(e.target.value)}
                className=" p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* 8 */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Colors
              </label>
            </div>
            <div className="mt-2">
              <input
                id="colors"
                name="colors"
                type="text"
                autoComplete="colors"
                required
                value={colors}
                onChange={(e)=>setColors(e.target.value)}
                className=" p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
             
              onClick={addData}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ADD CAR
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Dealer_ADD_CAR;
