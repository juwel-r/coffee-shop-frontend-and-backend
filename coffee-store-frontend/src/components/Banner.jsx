import banner from "../assets/banner.png";
import BannerIcons from "./BannerIcons";
import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";
const Banner = () => {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="bg-cover bg-center h-[800px] flex justify-end items-center text-white/80"
      >
        <div className="md:w-[60%] space-y-6 p-8">
          <h1 className="text-5xl font-semibold text-white">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-lg">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!!Your companion of every moment!!! <br /> Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn btn-warning">Learn More</button>
        </div>
      </div>
      <div className="bg-[#ECEAE3] grid md:grid-cols-2 lg:grid-cols-4 py-14 px-8 md:px-20 place-content-center">
        <BannerIcons
          icon={icon1}
          title={"Awesome Aroma"}
          description={
            "You will definitely be a fan of the design & aroma of your coffee"
          }
        ></BannerIcons>
        <BannerIcons
          icon={icon2}
          title={"High Quality"}
          description={
            "We served the coffee to you maintaining the best quality"
          }
        ></BannerIcons>
        <BannerIcons
          icon={icon3}
          title={"Pure Grades"}
          description={
            "The coffee is made of the green coffee beans which you will love"
          }
        ></BannerIcons>
        <BannerIcons
          icon={icon4}
          title={"Proper Roasting"}
          description={
            "Your coffee is brewed by first roasting the green coffee beans"
          }
        ></BannerIcons>
      </div>
    </section>
  );
};

export default Banner;
