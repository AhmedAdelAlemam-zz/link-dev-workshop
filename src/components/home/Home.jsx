import React from "react";
import { articles, sourceCategory } from "../../json/newsapi.json";
import HomeCarousel from "./Carousel";
import HomeNews from "./HomeNews";
import WeHelped from "./WeHelped";
const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <HomeNews articles={articles} />
      <WeHelped />
    </div>
  );
};

export default Home;
