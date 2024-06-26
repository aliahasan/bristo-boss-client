import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center mt-10">
      <p className="text-yellow-600 mb-2 text-lg"> ---- {subHeading} ---- </p>
      <h3 className="text-3xl uppercase font-medium border-y-2 py-4 ">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
