import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Coffee = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } =
    coffee || {};

  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://cofee-store-backend.vercel.app/coffee-list/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Coffee has been deleted!",
                icon: "success",
              });
              const remainingCoffees = coffees.filter((c) => c._id != id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  /**
 * "_id": "6749524483ac207a428c82b8",
    "name": "Americano Coffee",
    "chef": "Mr. Matin Paul",
    "supplier": "Coffee Co.",
    "taste": "Bitter",
    "category": "spresso-based",
    "details": "A classic espresso-based coffee with a strong taste.",
    "photo": "https://i.ibb.co.com/D8PSZNx/1.png"
 */
  return (
    <section className="w-full mx-auto rounded-xl bg-[#F5F4F1] flex justify-around items-center px-8 py-10">
      <div>
        <img src={photo} alt="" />
      </div>
      <div className="text-xl text-left">
        <p>
          <strong>Name: </strong> {name}
        </p>
        <p>
          <strong>Chef: </strong> {chef}
        </p>
        <p>
          <strong>Price:</strong> 890 Taka
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <Link to={`/coffee-details/${_id}`}>
          <button className="btn text-2xl text-white bg-black rounded-lg">
            <FaEye></FaEye>
          </button>
        </Link>
        <Link to={`/update-coffee/${_id}`}>
          <button className="btn text-2xl text-white bg-[#D2B48C] rounded-lg">
            <FaEdit></FaEdit>
          </button>
        </Link>

        <button
          onClick={() => deleteHandler(_id)}
          className="btn text-2xl text-white bg-red-500 rounded-lg"
        >
          <MdDelete></MdDelete>
        </button>
      </div>
    </section>
  );
};

export default Coffee;
//
