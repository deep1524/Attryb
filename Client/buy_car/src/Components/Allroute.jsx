import React from "react";

import { Route, Routes } from "react-router-dom";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Sell_car from "../Pages/Sell_car";
import Dealer_ADD_CAR from "../Pages/Dealer_ADD_CAR";
import Dealer_page from "../Pages/Dealer_page";
import Edit_car from "../Pages/Edit_car";



const AllRoute = () => {
  // all route done
  return (
    <Routes>
      <Route path="/" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/sell_car" element={<Sell_car />}></Route>
      <Route path="/addcar" element={<Dealer_ADD_CAR/>}></Route>
      <Route path="/car_details" element={<Dealer_page/>}></Route>
      <Route path="/edit" element={<Edit_car/>}></Route>
    </Routes>
  );
};

export default AllRoute;