import React from "react";
import {
  ButtonForm,
  InputForm,
  TitleForm,
  LinkForm,
  ContainerForm,
} from "./StyledForm";

const SignInForm = () => (
  <ContainerForm>
    <div className="max-w-md w-full">
      <div>
        <TitleForm>
          Crear una cuenta
        </TitleForm>
        <p className="mt-2 text-center text-sm leading-5 text-gray-600">
          o &nbsp;
          <LinkForm href="/login" className="transition ease-in-out duration-150">
            Ingresar
          </LinkForm>
        </p>
      </div>
      <form className="mt-8" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm">
          <div>
            <InputForm
              aria-label="Email address"
              name="email"
              type="email"
              required
              className="placeholder-gray-500"
              placeholder="Email address"
            />
          </div>
          <div className="-mt-px">
            <InputForm
              aria-label="Password"
              name="password"
              type="password"
              required
              className="placeholder-gray-500"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="mt-6">
          <ButtonForm
            type="submit"
            className="group transition duration-150 ease-in-out"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign in
          </ButtonForm>
        </div>
      </form>
    </div>
  </ContainerForm>
);

export default SignInForm;
