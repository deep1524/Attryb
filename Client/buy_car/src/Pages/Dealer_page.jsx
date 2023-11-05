
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Dealer_page() {
  const [data, setData] = useState([]);
const navigate=useNavigate();
  const getdata = () => {
    fetch("http://localhost:8080/car")
      .then((response) => response.json())
      .then((data) => setData(data), console.log(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getdata();
  }, []);

  const carEdit = (id) => {
    console.log("edit", id);
    localStorage.setItem("id", id);
    navigate("/edit")
  };
  const handledelete = (id) => {
    console.log("in");
    axios
      .delete(`http://localhost:8080/car/delete/${id}`)
      .then((e) => console.log("deleted successfully"),
     )
      .catch((e) => console.log(e));
      alert("deleted successfully")
    window.location.reload();
  };
  return (
<>


   
   
    <div className="bg-white">



      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          SECOND HAND CAR COLLECTION
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="">
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
                      {product.brand}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                
                <p className="text-sm font-medium text-gray-900">
                  price: {product.price}
                </p>
              
                <p className="text-sm font-medium text-gray-900">
                  {product.mileage}
                </p>

                <div className="mt-2">
                <button
                  onClick={() => carEdit(product._id)}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Edit Car
                </button>
              </div>

              <div className="mt-2">
                <button
                  className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-indigo-600"
                  onClick={() => handledelete(product._id)}
                >
                  Delete Car
                </button>
              </div>
              </div>
           
            </div>
          ))}
        </div>
      </div>
    </div>
   
   </>
  );
}
