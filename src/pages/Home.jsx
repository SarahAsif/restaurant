import "../App.css";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Popular_Products from "../components/Popular_Products";
import Hot from "../components/Hot";
import Amazing from "../components/Amazing";
import Download from "../components/Download";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Discount from "../components/Discount";
import Search from "../components/Search";

function Home() {
  return (
    <div className="App ">
      <Nav />
      <div className="flex flex-col space-y-16">
        {" "}
        <Main />
        <Popular_Products />
        <Hot />
        <Amazing />
        <Download />
        <Testimonial />
        <div>
          <div className="relative -mb-16">
            <Discount />
          </div>
          <Footer />
          {/* <Search /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
