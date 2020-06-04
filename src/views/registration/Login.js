import React from "react";
import HomeHeader from "../../components/home/HomeHeader";
import LoginForm from "../../components/registatrion/LoginForm";
import HomeImage from "../../components/home/HomeImage";

const Login = () => (
  <HomeHeader
    content = {<LoginForm/>}
    image = {<HomeImage/>}
  />
);

export default Login;