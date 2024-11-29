import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="text-black  h-screen">
      <Header></Header>
      <Outlet></Outlet>{" "}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
