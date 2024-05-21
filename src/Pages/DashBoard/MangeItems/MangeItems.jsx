import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import { Link } from "react-router-dom";

const MangeItems = () => {
  const { menu, refetch, loading } = useMenu();
  const axiosSecure = useAxios();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.delete(`/menu/${item._id}`);
          console.log(response.data);
          if (response.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${item.name} has been deleted`,
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the item.",
              icon: "error",
            });
          }
        } catch (error) {
          console.error("Error deleting item:", error);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while deleting the item.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading={"mange all items"}
        subHeading={"Hurry up"}
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>$ {item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateitem/${item._id}`}>
                      <button className="btn btn-lg">
                        <FaEdit></FaEdit>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-lg"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MangeItems;
