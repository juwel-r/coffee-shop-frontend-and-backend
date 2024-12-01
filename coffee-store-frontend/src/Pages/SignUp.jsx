import React, { useContext, useState } from "react";
import { IoArrowBack, IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUp, data } = useContext(AuthContext);

  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const registerHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photoURL.value;
    const userData = { name, email, photo };

    signUp(email, password)
      .then((result) => {
        console.log(result);
        fetch("https://cofee-store-backend.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
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
          });
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
        to="/"
      >
        <IoArrowBack /> Back To Home
      </Link>
      <section className=" md:flex flex-col justify-around items-center md:py-20 p-10 md:px-16">
        <>
          <h1 className="text-4xl text-primary font-bold text-center py-4">
            Create an Account!
          </h1>
          <div className="card w-5/6 md:w-4/6 lg:w-2/6 mx-auto shrink-0 shadow-2xl">
            <form onSubmit={registerHandler} className="card-body">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
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
                  placeholder="Enter Photo URL"
                  className="input input-bordered w-full bg-white/50"
                  required
                />
              </div>

              <div className="form-control w-full relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Enter Password"
                  className="input input-bordered w-full bg-white/50"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="btn btn-ghost hover:bg-transparent btn-xs absolute bottom-[12%] right-[2%] text-gray-500 text-xl"
                >
                  {showPass ? <IoEyeOff /> : <IoEye />}
                </button>
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-ghost bg-primary text-lg  text-primary  my-4  bg-white/20 border border-primary/30 backdrop-blur-3xl">
                  Sign Up
                </button>
              </div>
            </form>
            <div className="px-8 divider"> OR</div>
            {/* <button
              onClick={signInWithGoogle}
              className="flex items-center justify-center  border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition mx-8 mb-6"
            >
              <img src={googlePng} alt="Google Logo" className="w-7 h-7 mr-2" />
              <span className="text-gray-700 font-medium">
                Continue with Google
              </span>
            </button> */}
          </div>
          <p className="flex justify-center items-center pb-16 mt-6">
            Have an account ? &nbsp;{" "}
            <Link className="font-semibold text-primary" to="/sign-in">
              {" "}
              Sign In Here!
            </Link>
          </p>
        </>
      </section>
    </div>
  );
};

export default SignUp;
