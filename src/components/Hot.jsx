import { Button } from "@mui/material";
import React from "react";
import coffee from "../image/coffee.png";
import cooking from "../image/cooking.png";
import delivery from "../image/delivery.png";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import { IsTabletWidth } from "../utils";
import { Scrollbars } from "react-custom-scrollbars";
import "../App.css";

const Hot = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  return (
    <div>
      <div
        className={clsx(
          "flex flex-row justify-around ",
          (mobileWidth || tabletWidth) &&
            "flex-col items-center text-center gap-9"
        )}
      >
        <div className="max-h-96 p-2">
          {/* <Scrollbars style={{ width: 400, background: "white" }}> */}
          <div className=" flex flex-col h-full w-96 max-h-96 space-y-14 text-center items-center overflow-y-scroll">
            <div className="flex flex-row text-center items-center gap-5 hover:w-56 hover:bg-pink-100 hover:cursor-pointer">
              <div>
                <img src={cooking} />
              </div>
              <div>Coffee</div>
            </div>
            <div className="flex flex-row text-center items-center gap-5 hover:w-56 hover:bg-pink-100 hover:cursor-pointer">
              <div>
                <img src={cooking} />
              </div>
              <div>Desi</div>
            </div>
            <div className="flex flex-row text-center items-center gap-5 hover:w-56 hover:bg-pink-100 hover:cursor-pointer">
              <div>
                <img src={cooking} />
              </div>
              <div>Desserts</div>
            </div>
            <div className="flex flex-row text-center items-center gap-5 hover:w-56 hover:bg-pink-100 hover:cursor-pointer">
              <div>
                <img src={cooking} />
              </div>
              <div>Fast Food</div>
            </div>
            <div className="flex flex-row text-center items-center gap-5 hover:w-56 hover:bg-pink-100 hover:cursor-pointer">
              <div>
                <img src={cooking} />
              </div>
              <div>Pizza</div>
            </div>
            <div className="flex flex-row text-center items-center gap-5 hover:w-56 hover:bg-pink-100 hover:cursor-pointer">
              <div>
                <img src={cooking} />
              </div>
              <div>Desi Menu</div>
            </div>
            <div className="flex flex-row text-center items-center gap-5 hover:w-56 hover:bg-pink-100 hover:cursor-pointer">
              <div>
                <img src={cooking} />
              </div>
              <div>Tea</div>
            </div>
            <div className="flex flex-row text-center items-center gap-5 hover:w-56 hover:bg-pink-100 hover:cursor-pointer">
              <div>
                <img src={cooking} />
              </div>
              <div>Italian</div>
            </div>
            <div className="flex flex-row text-center items-center gap-5 hover:w-56 hover:bg-pink-100 hover:cursor-pointer">
              <div>
                <img src={cooking} />
              </div>
              <div>Deserts</div>
            </div>
          </div>
          {/* </Scrollbars> */}
        </div>
        <div className="p-10 flex flex-row bg rounded-2xl max-h-auto">
          <div
            className={clsx(
              "flex space-y-6 flex-col text-left",
              mobileWidth && "flex-row text-center p-2"
            )}
          >
            <div
              className={clsx(
                "w-full",
                mobileWidth && "w-full items-center text-center"
              )}
            >
              <div
                className={clsx(
                  " bg-red-100 rounded-3xl p-4 flex flex-row",
                  mobileWidth && "p-0 gap-0 flex-row text-center items-center "
                )}
              >
                <div>Faster Food Delivery Service</div>
                <img
                  src={delivery}
                  className={clsx("", (mobileWidth || tabletWidth) && "hidden")}
                />
              </div>
            </div>
            <div className="font-semibold text-5xl text-red-600">
              Get delivered <br />
              while it is still hot.
            </div>
            <div>
              Bring together your discussions memberships <br />
              and content. Start your 7-day free trial.
            </div>
            <div>
              <Button
                variant="alert"
                sx={{
                  backgroundColor: "#2A333E",
                  color: "white",
                }}
              >
                GET STARTED
              </Button>
            </div>
          </div>
          <div className="">
            <img
              src={coffee}
              className={clsx("w-72", (mobileWidth || tabletWidth) && "hidden")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hot;
