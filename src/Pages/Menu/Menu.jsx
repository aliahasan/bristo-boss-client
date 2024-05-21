import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaIBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const { menu } = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offerd = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bristo boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading={"Dont miss "}
        heading={"today's offer"}
      ></SectionTitle>
      {/* offerd menu items*/}
      <MenuCategory items={offerd}></MenuCategory>
      <MenuCategory
        items={desserts}
        title={"desserts"}
        img={dessertBg}
      ></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} img={pizzaIBg}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} img={saladBg}></MenuCategory>
      <MenuCategory items={soup} title={"soup"} img={soupBg}></MenuCategory>
    </div>
  );
};
export default Menu;
