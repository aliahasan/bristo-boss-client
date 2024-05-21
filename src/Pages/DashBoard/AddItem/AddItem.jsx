import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxios();

  const onSubmit = async (data) => {
    const imgeFile = { image: data?.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imgeFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        Swal.fire({
          icon: "success",
          text: "item added succefully",
          timer: 1500,
        });
      }
    }
    console.log("with image  url", res.data);
  };

  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"What's New"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label>
              <div className="label">
                <span className="label-text">Recipe Name</span>
              </div>
              <input
                type="text"
                placeholder="Recipe name"
                {...register("name", { required: true })}
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label>
                <div className="label">
                  <span className="label-text">Category</span>
                </div>
                <select
                  defaultValue="default"
                  {...register("category", { required: true })}
                  className="select select-bordered w-full "
                >
                  <option disabled value="default">
                    Select a category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </label>
            </div>
            <div className="form-control w-full my-6">
              <label>
                <div className="label">
                  <span className="label-text">Price</span>
                </div>
                <input
                  type="number"
                  placeholder="Price"
                  {...register("price", { required: true })}
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          {/* recipe details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
              {...register("recipe", { required: true })}
            ></textarea>
          </label>
          <div className="my-6 form-control ">
            <input
              className="file-input w-full max-w-xs"
              type="file"
              name="image"
              {...register("image", { required: true })}
            />
          </div>

          <button className="btn">
            Add item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
