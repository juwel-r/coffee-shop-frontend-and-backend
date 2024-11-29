import React, { useEffect, useState } from "react";
import Coffee from "./Coffee";
import { useLoaderData } from "react-router-dom";

const Coffees = () => {
  const [coffees, setCoffees] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/coffee-list")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);
  console.log(coffees);
  return (
    <div className="grid md:grid-cols-2 gap-6 place-items-center place-content-center w-11/12 mx-auto">
      {
               coffees && coffees.map(coffee=><Coffee key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></Coffee>)
            }
    </div>
  );
};
 
export default Coffees;
