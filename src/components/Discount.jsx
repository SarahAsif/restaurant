import React from "react";
import Curve from "../image/curve.png";
import { IsMobileWidth } from "../utils";
import { IsTabletWidth } from "../utils";
import { IsDesktopSmallWidth } from "../utils";
import clsx from "clsx";

const Discount = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const smallerWidth = IsDesktopSmallWidth();
  return (
    <div className=" flex text-center justify-center items-center ">
      <div
        className={clsx(
          "rounded-3xl bg-white border-2 border-red-600 py-10 px-36 space-y-3",
          (mobileWidth || tabletWidth) && "py-0 px-0"
        )}
      >
        <div className="">
          <div className="flex flex-col font-bold items-center text-center mt-8 ">
            <div className="text-slate-800 font-bold text-2xl font-serif flex items-center text-center">
              <div>Get special Discounts</div>
            </div>
            <div className="">
              <img src={Curve} className="w-20 ml-40 relative" />
            </div>
          </div>
        </div>
        <div className="flex text-center items-center justify-center">
          <div className="max-w-xs font-semibold ">
            {" "}
            Input email address and complete your subscription to get our
            special offer.
          </div>
        </div>
        <div className="container flex justify-center items-center">
          <div className="relative">
            <div className="absolute top-4 left-3">
              <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
            </div>
            <input
              type="text"
              className="h-14 max-w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
              placeholder="Search anything..."
            />
            <div className="absolute top-2 right-2">
              <button className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
