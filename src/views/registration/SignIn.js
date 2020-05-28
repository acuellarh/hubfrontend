import React from "react";
import StyledForm from "../../components/registatrion/StyledForm"

const SignIn = () => (
  <StyledForm>
    <form>
      <input type="text" placeholder="Full name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
      <button>Sign In</button>
    </form>
  </StyledForm>
);

export default SignIn;
