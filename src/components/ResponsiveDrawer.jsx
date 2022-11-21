import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Drawer from "../image/drawer.png";
import MailIcon from "@mui/icons-material/Mail";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import { IsTabletWidth } from "../utils";
import { IsDesktopSmallWidth } from "../utils";

export default function SwipeableTemporaryDrawer() {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const smalldesktopWidth = IsDesktopSmallWidth();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Menu", "About US", "Our Specials", "Our Locations", "Our Chefs"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <nav
        className={clsx(
          "flex flex-row  text-zinc-800  py-7 px-20 w-100  items-center justify-between",
          mobileWidth && "px-1"
        )}
      >
        <div
          className={clsx("uppercase flex flex-row", mobileWidth && "ml-10")}
        >
          <div>
            <a
              href="/home"
              className={clsx(
                " text-3xl no-underline text-black hover:text-blue-dark mr-8 font-bold"
              )}
            >
              yannal
            </a>
          </div>
        </div>
        <div
          className={clsx(
            "font-semibold",
            mobileWidth && "visibility: visible"
          )}
        >
          <div>
            {" "}
            <button>
              <img
                onClick={toggleDrawer("left", true)}
                src={Drawer}
                className="drawer"
              />
            </button>
            <SwipeableDrawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
              onOpen={toggleDrawer("left", true)}
            >
              {list("left")}
            </SwipeableDrawer>
          </div>
        </div>
      </nav>
    </div>
  );
}
