import React from "react";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import Cover from "../../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  console.log(title)
  return (
    <div className="pt-12">
      {title && <Cover img={img} title={title}></Cover>}

      <div className="grid grid-cols-2 gap-8 py-4 px-4 my-16">
        {items.map((item, index) => (
          <MenuItem key={index} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline bg-red-500 text-white border-0 border-b-4 mt-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
