import React from "react";
import "../App.css";
import Card from "../UI/Card";
import Logo from "../components/Logo";
import meal1 from "../image/meal1.png";
import meal2 from "../image/meal2.png";
import meal3 from "../image/meal3.png";
import meal4 from "../image/meal4.png";
import Button from "@mui/material/Button";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import { IsTabletWidth } from "../utils";
import { IsDesktopSmallWidth } from "../utils";
import { IsDesktopWidth } from "../utils";
import Divider from "@mui/material/Divider";
import Curve from "../image/curve.png";

function Popular_Products() {
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
      style: "Sindhi",
    },
    {
      title: "Sweet Sawaiyan",
      description:
        "Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.",
      img: meal4,
      price: "$4.80",
      style: "Arabic",
    },
  ];
  return (
    <Card>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col font-bold items-center text-center mt-8 ">
          <div className="App">ONLINE STORE</div>
          <div className="text-red-600 font-bold text-4xl font-serif flex items-center text-center">
            <div>Popular Products</div>
          </div>
          <img src={Curve} className="text-left items-start" />
        </div>
        <div
          className={clsx(
            "flex flex-row justify-around gap-8",
            (mobileWidth || tabletWidth) && "flex-col"
          )}
        >
          {recipes.map((user) => (
            <div className="flex flex-col items-center text-center space-y-2">
              <img src={user.img} className="rounded-full shadow-xl" />
              <div>stars</div>
              <div>{user.style}</div>
              <div className="text-2xl font-semibold text-slate-800">
                {user.title}
              </div>
              <Button variant="contained" color="error">
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>{" "}
    </Card>
  );
}

export default Popular_Products;
