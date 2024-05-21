import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"what our clinet say"}
        heading={"Testimonials"}
      ></SectionTitle>
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="my-16 mx-24 text-center flex flex-col items-center justify-center space-y-4">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                  className="pb-2"
                />

                <p className="text-center">{review.details}</p>
                <h1 className="text-2xl text-orange-400">{review.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </section>
  );
};

export default Testimonials;
