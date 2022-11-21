import React from "react";
import phone from "../image/phonee.png";
import location from "../image/location.png";
import email from "../image/email.png";
import facebook from "../image/facebook.png";
import instagram from "../image/instagram.png";
import linkedin from "../image/linkedin.png";
import twitter from "../image/twitter.png";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import { IsTabletWidth } from "../utils";
const Footer = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  return (
    <div className="bg-slate-800 pt-20 p-10 text-white ">
      <div
        className={clsx(
          "flex flex-row justify-around space-x-6",
          (mobileWidth || tabletWidth) && "flex-col p-0"
        )}
      >
        <div
          className={clsx(
            "flex flex-col space-y-2  text-left items-center ",
            (mobileWidth || tabletWidth) && "flex flex-row text-center w-auto"
          )}
        >
          <div className="font-semibold ">Yannal</div>
          <div className="">
            <nav
              className={clsx(
                "text-white items-center text-left",
                mobileWidth && "text-left p-0 ",
                tabletWidth && "items-center text-left"
              )}
            >
              <div className="flex flex-row">
                <div
                  className={clsx(
                    "flex flex-row gap-2 text-center items-center",
                    mobileWidth && "visibility:visible"
                  )}
                >
                  <a
                    href="https://www.facebook.com/"
                    className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
                  >
                    <svg
                      fill="white"
                      className="w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
                  >
                    <svg
                      fill="white"
                      className="w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
                  >
                    <svg
                      fill="white"
                      className="w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                    </svg>{" "}
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
                  >
                    <svg
                      fill="white"
                      className="w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div
          className={clsx(
            "flex flex-col space-y-2 text-left  w-auto",
            (mobileWidth || tabletWidth) &&
              " flex-row text-center items-center "
          )}
        >
          <div className="font-semibold">Contact</div>
          <div className="flex flex-row gap-2 items-center ">
            <svg
              fill="white"
              className="w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
            F1 - 320 Jeff Heights, Main Blvd, Gulberg, Lahore, Pakistan
          </div>
          <div className="flex flex-row gap-2 items-center">
            <svg
              fill="white"
              className="w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>{" "}
            +92 - 300 - 115 - 222 -444{" "}
          </div>
          <div className="flex flex-row gap-2 items-center">
            <svg
              fill="white"
              className="w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
            </svg>{" "}
            support@yannal.com
          </div>
        </div>
        <div
          className={clsx(
            "flex flex-col space-y-2 text-left",
            (mobileWidth || tabletWidth) &&
              "w-auto flex-row text-center items-center"
          )}
        >
          <div className="font-semibold">Support</div>
          <div>
            <div>Faq</div>
            <div>Shipping & Returns</div>
            <div>Contact Us</div>
            <div>Our Partners</div>
          </div>
        </div>
        <div
          className={clsx(
            "flex flex-col space-y-1 text-left",
            (mobileWidth || tabletWidth) &&
              "w-auto flex-row text-center items-center"
          )}
        >
          <div className="font-semibold">Info</div>
          <div>
            <div>Dates</div>
            <div>Parties</div>
            <div>Birthdays</div>
            <div>Menu</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
