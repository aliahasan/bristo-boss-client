import React from "react";
import Banner from "../../Components/Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import Featuerd from "./Featured/Featuerd";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featuerd></Featuerd>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
