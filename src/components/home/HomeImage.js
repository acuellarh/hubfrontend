import React from "react";
import deliver from "../../assets/img/deliver.jpg";

const HomeImage = () => (
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img
      className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
      src={deliver}
      alt=""
    />
  </div>
);

export default HomeImage;
