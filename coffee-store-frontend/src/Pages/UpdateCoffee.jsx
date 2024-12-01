import React, { useContext } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } =
    coffee || {};
  const updateCoffeeHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    fetch(`https://cofee-store-backend.vercel.app/coffee-list/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: `${name} Updated Successfully!`,
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Warning!",
          text: "There was an Error!",
          icon: "warning",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className=" bg-[#f3f3f1] p-6">
      <div className="container mx-auto">
        <Link
          className="flex items-center gap-3 font-semibold text-xl my-4"
          to="/"
        >
          <IoArrowBack /> Back To Home
        </Link>

        {/* Form Container */}
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Update Coffee: <strong>{name}</strong>
          </h3>
          <p className="text-center text-gray-500 mb-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>

          <form onSubmit={updateCoffeeHandler}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  defaultValue={name}
                  placeholder="Enter coffee name"
                  className="input input-bordered"
                />
              </div>
              {/* Chef Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>
                <input
                  name="chef"
                  type="text"
                  defaultValue={chef}
                  placeholder="Enter coffee chef"
                  className="input input-bordered"
                />
              </div>

              {/* Supplier Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  name="supplier"
                  type="text"
                  defaultValue={supplier}
                  placeholder="Enter coffee supplier"
                  className="input input-bordered"
                />
              </div>

              {/* Taste Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <input
                  name="taste"
                  type="text"
                  defaultValue={taste}
                  placeholder="Enter coffee taste"
                  className="input input-bordered"
                />
              </div>

              {/* Category Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  name="category"
                  type="text"
                  defaultValue={category}
                  placeholder="Enter coffee category"
                  className="input input-bordered"
                />
              </div>

              {/* Details Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  name="details"
                  type="text"
                  defaultValue={details}
                  placeholder="Enter coffee details"
                  className="input input-bordered"
                />
              </div>

              {/* Photo URL */}
              <div className="form-control col-span-full">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  defaultValue={photo}
                  placeholder="Enter photo URL"
                  className="input input-bordered"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-8">
              <button className="btn btn-primary btn-block bg-[#b5884c] text-white border-none hover:bg-[#614825]">
                Update Coffee Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
