import React from "react";
import "../App.css";
import Card from "../UI/Card";
import Logo from "../components/Logo";
import meal1 from "../image/meal1.png";
import meal2 from "../image/meal2.png";
import meal3 from "../image/meal3.png";
import meal4 from "../image/meal4.png";
import share from "../image/share.png";
import heart from "../image/heart.png";
import Button from "@mui/material/Button";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import { IsTabletWidth } from "../utils";
import { IsDesktopSmallWidth } from "../utils";
import { IsDesktopWidth } from "../utils";
import Divider from "@mui/material/Divider";
import Curve from "../image/curve.png";

function Amazing() {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const desktopSmallWidth = IsDesktopSmallWidth();
  const desktopWidth = IsDesktopWidth();

  const recipes = [
    {
      title: "Dishim with Fries and Sause",
      description:
        "Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.",
      img: meal1,
      price: "$7.1",
      style: "Chinese",
    },
    {
      title: "Chicken Hot Wings",
      description:
        "Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.",
      img: meal2,
      price: "$6.40",
      style: "Pakistani",
    },
    {
      title: "Samosas with Green Chatni",
      description:
        "Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.",
      img: meal3,
      price: "$4.80",
      style: "Chinese",
    },
    {
      title: "Sweet Sawaiyan",
      description:
        "Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.",
      img: meal4,
      price: "$4.80",
      style: "Chinese",
    },
    {
      title: "Fried Raw Fish",
      description:
        "Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.",
      img: meal1,
      price: "$5.10",
      style: "Chinese",
    },
    {
      title: "Brakefast with Half Fried Egg",
      description:
        "Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.",
      img: meal2,
      price: "$3.60",
      style: "Chinese",
    },
  ];

  return (
    <Card>
      <div className="flex flex-col gap-20 items-center text-center">
        <div className="flex flex-col font-bold items-center text-center mt-8">
          <div className="App">POPULAR MENU</div>
          <div className="text-red-600 font-bold text-4xl font-serif flex items-center text-center">
            <div>
              Amazing Food Served <br />
              With Delicacy
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 max-w-full text-center gap-20 justify-between",
            (mobileWidth || tabletWidth) && ""
          )}
        >
          {recipes.map((user) => (
            <div className="flex flex-col items-center text-center space-y-2 max-w-xs">
              <img src={user.img} className="rounded-full shadow-xl" />
              <div>stars</div>
              <div className="font-semibold text-slate-800">{user.title}</div>
              <div className="text-normal ">
                Lorem Ipsum Lorem Ipsum is simply and dummy text of the
                printing.
              </div>
              <div className="flex flex-row justify-between items-center text-center w-full">
                <div>{user.price}</div>
                <div className="flex flex-row gap-2">
                  <img src={heart} className="w-5" />
                  <img src={share} className="w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>{" "}
    </Card>
  );
}

export default Amazing;
