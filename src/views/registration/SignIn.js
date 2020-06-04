import React from "react";
import HomeHeader from "../../components/home/HomeHeader";
import SignInForm from "../../components/registatrion/SignInForm";
import HomeImage from "../../components/home/HomeImage";

const SignIn = () => (
  <HomeHeader
    content = {<SignInForm/>}
    image = {<HomeImage/>}
  />
);

export default SignIn;
