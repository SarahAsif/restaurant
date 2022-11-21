import React from "react";
import "../App.css";
import Phone from "../image/phone.png";
import Store from "../image/store.png";
import Button from "@mui/material/Button";
import TrendingFlat from "@mui/icons-material/TrendingFlat";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import { IsTabletWidth } from "../utils";
import { IsDesktopSmallWidth } from "../utils";

const Download = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const desktopSmallWidth = IsDesktopSmallWidth();
  return (
    <>
      {" "}
      <div
        className={clsx(
          "leading-normal px-14",
          mobileWidth && "text-center",
          tabletWidth && "px-2"
        )}
      >
        <div
          className={clsx(
            "flex flex-row justify-around items-center text-center",
            mobileWidth && "flex-col",
            tabletWidth && ""
          )}
        >
          <div className="z-30">
            <img src={Phone} className=" rounded-3xl" />
          </div>
          <div className="space-y-7 flex flex-col text-left max-w-xl">
            <div className="leading-normal lg:text-5xl text-2xl lg:max-w-lg max-w-xs text-left text-red-600 font-bold">
              It’s all here.
              <br /> All in one app.
            </div>
            <div>
              Discover local, on-demand delivery or Pickup from restaurants,
              nearby grocery and convenience stores, and more.
            </div>
            <div
              className={clsx(
                "flex flex-row gap-8",
                mobileWidth && "space-x-0 space-y-9 flex-col",
                tabletWidth && "pt-7 space-x-0 space-y-9 flex-col text-center"
              )}
            >
              <div>
                <img src={Store} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
