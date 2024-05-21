import React from "react";
import Banner from "../../Components/Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import Featuerd from "./Featured/Featuerd";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
  <div> 
    <div>
      <Helmet>
        <title>Bristo boss | home</title>
      </Helmet>
    </div>
      <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featuerd></Featuerd>
      <Testimonials></Testimonials>
    </div>
  </div>
  );
};

export default Home;
