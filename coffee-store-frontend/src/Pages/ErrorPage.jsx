import error404 from '../assets/404.gif'
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
const ErrorPage = () => {
    return (
        <div className="w-10/12 mx-auto">
        <Link
          className="flex items-center justify-center gap-3 font-semibold text-xl mt-20 "
          to="/"
        >
          <IoArrowBack /> Back To Home
        </Link>
        <section className=" md:flex justify-around items-center">
        <img src={error404} alt="" />
          
        </section>
      </div>
    );
};

export default ErrorPage;