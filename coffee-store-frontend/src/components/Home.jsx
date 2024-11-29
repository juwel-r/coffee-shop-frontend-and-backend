import Banner from "../components/Banner";
import React from "react";
import PopularCoffee from "./PopularCoffee";
import Coffees from "./Coffees";
import FollowUs from "./FollowUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularCoffee></PopularCoffee>
      <FollowUs></FollowUs>
    </div>
  );
};

export default Home;
