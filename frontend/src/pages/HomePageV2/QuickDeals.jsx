import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import Countdown from "../../components/Countdown";
import CustomArrows, { Carousel } from "../../components/Carousel2";

const QuickDeals = () => {
  return (
    <div className="lg:px-16 md:px-5 sm:px-3 -mx-3 w-full my-16">
      <div className="flex justify-between items-start">
        <h1 className="text-Highlight text-2xl font-bold mb-5">Flash Offers</h1>
        <h2 className="text-primary text-xl font-semibold flex gap-4 ">
          View All
          <IoIosArrowForward />
        </h2>
      </div>

      <p className="text-[#777777] text-xl font-semibold">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum labore
        enim possimus.
      </p>
      <div className="grid xl:grid-cols-2 lg:grid-cols-1  md:grid-cols-1 sm:grid-cols-1 grid-cols-1">
        <div>
          <Countdown />
        </div>
        <div className="md:px-1 px-10">
          <CustomArrows />
        </div>
      </div>
    </div>
  );
};

export default QuickDeals;
