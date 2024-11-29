import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const addCoffeeHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    // console.log(newCoffee);

    fetch("http://localhost:5000/coffee-add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: `${name} Added Successfully!`,
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        // console.log(data);
        form.reset()
      })
      .catch((error) => {
        Swal.fire({
          title: "Warning!",
          text: "There was an Error!",
          icon: "warning",
          confirmButtonText: "Try Again",
        });
      });
  };

  /**
 * {
  "coffees": [
    {
      "id": 1,
      "name": "Americano Coffee",
      "chef": "Mr. Matin Paul",
      "supplier": "Coffee Co.",
      "taste": "Bitter",
      "category": "Espresso-based",
      "details": "A classic espresso-based coffee with a strong taste.",
      "photo": "https://i.ibb.co.com/D8PSZNx/1.png"
    },
    {
      "id": 2,
      "name": "Latte Coffee",
      "chef": "Ms. Sarah Khan",
      "supplier": "Café Latte",
      "taste": "Mild and Creamy",
      "category": "Milk-based",
      "details": "A smooth espresso with steamed milk and foam.",
      "photo": "https://i.ibb.co.com/K29Wz5t/2.png"
    },
    {
      "id": 3,
      "name": "Cappuccino",
      "chef": "Mr. Ahsan Jamil",
      "supplier": "Cappuccino Hub",
      "taste": "Foamy and Strong",
      "category": "Milk-based",
      "details": "An espresso topped with foamy steamed milk.",
      "photo": "https://i.ibb.co.com/ZH3knWj/3.png"
    },
    {
      "id": 4,
      "name": "Mocha Coffee",
      "chef": "Mr. Farhan Ali",
      "supplier": "Mocha Makers",
      "taste": "Chocolatey and Rich",
      "category": "Espresso-based",
      "details": "A delicious mix of espresso, steamed milk, and chocolate.",
      "photo": "https://i.ibb.co.com/TtGycSm/4.png"
    },
    {
      "id": 5,
      "name": "Flat White",
      "chef": "Ms. Ayesha Begum",
      "supplier": "Flat White Café",
      "taste": "Smooth and Velvety",
      "category": "Milk-based",
      "details": "An espresso with velvety steamed milk, less foam.",
      "photo": "https://i.ibb.co.com/QfGFJrq/5.png"
    },
    {
      "id": 6,
      "name": "Irish Coffee",
      "chef": "Mr. Imran Shah",
      "supplier": "Irish Brews",
      "taste": "Rich and Bold",
      "category": "Alcoholic Coffee",
      "details": "A delightful blend of coffee, whiskey, and cream.",
      "photo": "https://i.ibb.co.com/FhzwF9t/6.png"
    }
  ]
}

 */

  return (
    <div className="bg-[#f3f3f1] p-6">
      <div className="container mx-auto">
        <Link
          className="flex items-center gap-3 font-semibold text-xl my-4"
          to="/"
        >
          <IoArrowBack /> Back To Home
        </Link>

        {/* Form Container */}
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Add New Coffee
          </h2>
          <p className="text-center text-gray-500 mb-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>

          <form onSubmit={addCoffeeHandler}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
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
                  placeholder="Enter photo URL"
                  className="input input-bordered"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-8">
              <button className="btn btn-primary btn-block bg-[#b5884c] text-white border-none hover:bg-[#614825]">
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
