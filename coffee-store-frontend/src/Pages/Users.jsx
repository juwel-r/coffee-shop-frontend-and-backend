import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <table className="border mx-auto md:w-10/12 my-10">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">SL.</th>
            <th className="border border-gray-400 p-2">Photo</th>
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Email</th>
            <th className="border border-gray-400 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={user._id}>
                <td className="border border-gray-400 p-2 text-center">
                {index + 1}
                </td>
                <td className="border border-gray-400 p-2 text-center w-20">
                  <img
                    className="w-10 h-10 mx-auto object-cover rounded-full"
                    src={user.photo}
                    alt={user.name}
                    title={user.name}
                  />
                </td>
                <td className="border border-gray-400 p-2 md:pl-8">{user.name}</td>
                <td className="border border-gray-400 p-2 text-center">{user.email}</td>
                <td className="border border-gray-400 p-2 text-center">
                  <Link to={`/user/update/${user._id}`}><button className="btn btn-sm text-green-500 text-center">
                    <FaEdit></FaEdit>
                  </button></Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
