import "./App.css";
import Card from "./UI/Card";
import clsx from "clsx";
import { IsMobileWidth } from "./utils";
import { IsTabletWidth } from "./utils";
import { IsDesktopSmallWidth } from "./utils";
import { IsDesktopWidth } from "./utils";
import Divider from "@mui/material/Divider";
import Popular_Products from "./components/Popular_Products";
import Home from "./pages/Home";
import Amazing from "./components/Amazing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const desktopSmallWidth = IsDesktopSmallWidth();
  const desktopWidth = IsDesktopWidth();

  return (
    <div>
      <div className="App flex flex-col ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/amazing" element={<Amazing />} />
            <Route path="/popular" element={<Popular_Products />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
