import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UserUpdate = () => {
  const user = useLoaderData();
  const updateHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photoURL.value;
    const userData = { name, email, photo };

    fetch("http://localhost:5000/users", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: `Account Created Successfully!`,
            icon: "success",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `${error.code}, Try again.`,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  return (
    <div className="mx-auto bg-[#fffaea] p-6 md:p-10">
      <Link
        className="flex items-center gap-3 font-semibold text-xl my-4"
        to="/users"
      >
        <IoArrowBack /> Back To Home
      </Link>
      <section className=" md:flex flex-col justify-around items-center md:py-20 p-10 md:px-16">
        <>
          <img
            className="h-40 w-40 object-cover rounded-full shadow-2xl"
            src={user.photo}
            alt=""
          />
          <p className="text-2xl font-bold text-center py-4">
            Hello <strong className="text-primary">{user.name}</strong> Update
            your Profile.
          </p>
          <div className="card w-5/6 md:w-4/6 lg:w-2/6 mx-auto shrink-0 shadow-2xl">
            <form onSubmit={updateHandler} className="card-body">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  defaultValue={user.name}
                  placeholder="Enter Name"
                  className="input input-bordered w-full bg-white/50"
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  defaultValue={user.email}
                  placeholder="Enter Email"
                  className="input input-bordered w-full bg-white/50"
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photoURL"
                  type="text"
                  defaultValue={user.photo}
                  placeholder="Enter Photo URL"
                  className="input input-bordered w-full bg-white/50"
                  required
                />
              </div>

              <div className="form-control mt-4">
                <button className="btn btn-ghost bg-primary text-lg  text-primary  my-4  bg-white/20 border border-primary/30 backdrop-blur-3xl">
                  Update Now
                </button>
              </div>
            </form>
          </div>
        </>
      </section>
    </div>
  );
};

export default UserUpdate;
