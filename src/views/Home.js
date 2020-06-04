import React from "react";
import HomeContent from "../components/home/HomeContent";
import HomeImage from "../components/home/HomeImage";
import HomeHeader from "../components/home/HomeHeader";

function Home() {
  return (
    <HomeHeader
      content = {<HomeContent/>}
      image = {<HomeImage/>}
    />
  );
}

export default Home;
