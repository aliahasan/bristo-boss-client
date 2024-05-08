import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featuerd = () => {
  return (
    <div className="featured-item text-white my-20 bg-fixed">
      <SectionTitle
        subHeading={"chek it out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
        <div>
            <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 ">
            <p>Aug 20 , 2024 </p>
            <p className="uppercase"> where can i get some ?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit rem eligendi voluptas non dicta aperiam illum cupiditate illo itaque, officia recusandae fugit fuga enim. At voluptates ex autem sint tempore! Ipsa repellendus aut voluptatem magnam quidem exercitationem commodi, provident tenetur illum id facilis doloribus tempore? Quo, fugit temporibus. Cum, nemo.</p>
           <div>
           <button className="btn btn-outline text-white border-0 border-b-4 mt-4">Order Now</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Featuerd;
