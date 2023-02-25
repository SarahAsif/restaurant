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
import BasicModal from "./BasicModal";
import { useSelector } from "react-redux";

function Nav() {
  const { cart } = useSelector((state) => state);

  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const smalldesktopWidth = IsDesktopSmallWidth();
  const [isShown, setIsShown] = useState(false);
  const [modalShown, setModalShown] = useState(false);

  const search = (e) => {
    setIsShown(true);
  };
  const modals = (e) => {
    setModalShown(true);
  };
  const handleClose = () => setModalShown(false);

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
            {isShown === true ? (
              <Search />
            ) : (
              <img
                src={searching}
                className="cursor-pointer"
                onClick={search}
              />
            )}
            <img src={cart} className="cursor-pointer" onClick={modals} />
            {modalShown && (
              <BasicModal modalShown={modalShown} handleClose={handleClose} />
            )}
            {cart.length > 0 && (
              <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                {cart.length}
              </div>
            )}
            <img src={user} className="cursor-pointer" onClick={modals} />
            {modalShown && (
              <BasicModal modalShown={modalShown} handleClose={handleClose}>
                <h1>mirhaaaa</h1>
              </BasicModal>
            )}
          </div>
        </nav>
      )}
      {(mobileWidth || tabletWidth) && <ResponsiveDrawer />}
    </>
  );
}
export default Nav;
