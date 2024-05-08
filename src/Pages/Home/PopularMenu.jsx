import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <div>
      <section className="mb-12">
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Popular Items"}
        ></SectionTitle>

        <div className="grid grid-cols-2 gap-8 py-4 px-4">
          {menu.map((item, index) => (
            <MenuItem key={index} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            View full menu
          </button>
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;
