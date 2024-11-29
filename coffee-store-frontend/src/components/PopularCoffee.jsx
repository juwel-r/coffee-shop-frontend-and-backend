import React from "react";
import SectionHeader from "./SectionHeader";
import Coffees from "./Coffees";
import { Link } from "react-router-dom";

const PopularCoffee = () => {
  return (
    <div className="mx-auto text-center">
      <SectionHeader
        description={"--- Sip & Savor ---"}
        title={"Our Popular Products"}
      ></SectionHeader>
      <Link to='/add-coffee'><button className="btn btn-warning my-6 btn-wide">Add Coffee</button></Link>
      <Coffees></Coffees>

    </div>
  );
};

export default PopularCoffee;
