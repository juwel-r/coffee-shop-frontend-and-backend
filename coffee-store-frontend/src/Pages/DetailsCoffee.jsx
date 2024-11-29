import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const DetailsCoffee = () => {
  const coffee = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } =
    coffee || {};
  console.log(coffee);
  return (
    <div className="w-10/12 mx-auto">
      <Link
        className="flex items-center gap-3 font-semibold text-xl my-4"
        to="/"
      >
        <IoArrowBack /> Back To Home
      </Link>
      <section className="bg-[#fff9e9] md:flex justify-around items-center md:py-20 p-10 md:px-16">
      
        <div>
          <img src={photo} alt={name} />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p>
            <strong>Name:</strong>
            {name}
          </p>
          <p>
            <strong>Chef:</strong>
            {chef}
          </p>
          <p>
            <strong>Supplier:</strong>
            {supplier}
          </p>
          <p>
            <strong>Taste:</strong>
            {taste}
          </p>
          <p>
            <strong>Category:</strong>
            {category}
          </p>
          <p>
            <strong>Details:</strong>
            {details}
          </p>
        </div>
      </section>
    </div>
  );
};

export default DetailsCoffee;
