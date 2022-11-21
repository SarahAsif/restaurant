import "../App.css";
import clsx from "clsx";
import { IsDesktopSmallWidth, IsMobileWidth } from "../utils";
import { IsTabletWidth } from "../utils";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { Link, useParams, useNavigate } from "react-router-dom";
import user from "../image/user.png";
import cart from "../image/cart.png";
import searching from "../image/search.png";
import { useState } from "react";
import Search from "./Search";

function Nav() {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const smalldesktopWidth = IsDesktopSmallWidth();
  const [isShown, setIsShown] = useState(false);
  const search = (e) => {
    setIsShown(true);
  };

  return (
    <>
      {!(mobileWidth || tabletWidth) && (
        <nav
          className={clsx(
            "flex flex-row  text-zinc-800  p-10 w-100  items-center justify-between",
            mobileWidth && "p-0 flex-col"
          )}
        >
          <div className={clsx(" uppercase flex flex-row", mobileWidth && "")}>
            <div>
              <Link
                to={"/"}
                className="text-3xl no-underline text-black font-bold"
              >
                yannal
              </Link>
            </div>
          </div>
          <div
            className={clsx(
              "grid grid-flow-col gap-9 list font-semibold ",
              mobileWidth && "visibility: hidden",
              smalldesktopWidth && "hidden"
            )}
          >
            <Link
              to="/"
              className="links text-lg no-underline text-grey-darkest hover:text-blue-dark"
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="links text-lg no-underline text-grey-darkest hover:text-blue-dark"
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="links text-lg no-underline text-grey-darkest hover:text-blue-dark"
            >
              Our Specials
            </Link>

            <Link
              to="/Contact"
              className="links text-lg no-underline text-grey-darkest hover:text-blue-dark"
            >
              Our Locations
            </Link>
            <Link
              to="/Contact"
              className="links text-lg no-underline text-grey-darkest hover:text-blue-dark"
            >
              Our Chefs
            </Link>
          </div>
          <div className="flex flex-row gap-5 ">
            <img src={searching} className="cursor-pointer" onClick={search} />
            {isShown && <Search />}
            <img src={cart} className="cursor-pointer" />
            <img src={user} className="cursor-pointer" />
          </div>
        </nav>
      )}
      {(mobileWidth || tabletWidth) && <ResponsiveDrawer />}
    </>
  );
}
export default Nav;
