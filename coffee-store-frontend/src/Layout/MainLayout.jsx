import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MainLayout = () => {
  const data = useContext(AuthContext)
  return (
    <div className="text-black  h-screen">
      <Header></Header>
      <div className="min-h-[calc(100vh-400px)]"><Outlet></Outlet>{" "} </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
