import React from "react";
import kebab from "../image/kebab.png";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import { IsTabletWidth } from "../utils";
import Button from "@mui/material/Button";
import "../App.css";
import { IsDesktopSmallWidth } from "../utils";
const Main = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const desktopSmallWidth = IsDesktopSmallWidth();
  return (
    <div
      className={clsx(
        "flex flex-row text-left items-center justify-around ml-20",
        mobileWidth && "flex-col text-center ml-0 m-1"
      )}
    >
      <div
        className={clsx(
          "flex flex-col ",
          mobileWidth && "items-center text-center"
        )}
      >
        <div className="uppercase text-red-600 text-xl">
          Now taking online orders
        </div>
        <div className="font-semibold text-9xl text-red-600">kababs</div>
        <div className="space-y-10">
          <div
            className={clsx("text-slate-800 max-w-xl", mobileWidth && "px-10")}
          >
            Restaurant style Yogurt Mint Sauce is delicious dip which is quick
            and easy to ... This is a standard Indian mint chutney served with
            poppadums along with mint and lemon.
          </div>
          <div
            className={clsx(
              "flex gap-4",
              mobileWidth && "flex flex-col items-center text-center"
            )}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
              }}
              className="Button"
            >
              Add To Cart
            </Button>
            <Button
              className="Table"
              sx={{
                backgroundColor: "#2A333E",
                color: "white",
              }}
            >
              Book a Table
            </Button>
          </div>
          <div
            className={clsx(
              "flex flex-row justify-between max-w-sm ",
              mobileWidth && "flex-col items-center text-center max-w-full"
            )}
          >
            <div>
              <div className="font-bold ">Lunch</div>
              <div className="font-bold text-slate-800 opacity-50">
                1:00-03:00pm
              </div>
            </div>
            <div>
              <div className="font-bold">Dinner</div>
              <div className="font-bold opacity-50">7:00-10:00pm</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={kebab} />
      </div>
    </div>
  );
};

export default Main;
