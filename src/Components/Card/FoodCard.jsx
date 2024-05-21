import React, { useContext } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item || {};
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const myAxios = useAxios();
  const [ , refetch] = useCart();
  const handleAddToCart = (food) => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };

      myAxios.post("/carts", cartItem).then((res) => {
        if (res?.data?.insertedId) {
          Swal.fire({
            title: `${name} added to your cart`,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          // refeatch cart to update the card items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not login",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 bg-teal-900 text-white px-4 py-2">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 border-b-orange-400"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
