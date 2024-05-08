import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item || {};
  return (
    <div className="flex space-x-3">
      <img style={{
        borderRadius: "0 200px 200px 200px"
      }} src={image} alt="" className="w-[120px] " />
      <div>
        <h3 className="uppercase">{name} -------------</h3>
        <p>{recipe}</p>
        <p className="text-yellow-500">$ {price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
