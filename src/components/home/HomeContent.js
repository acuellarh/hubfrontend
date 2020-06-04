import React from "react";
import { Link } from "react-router-dom";

const HomeContent = () => (
  <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-4 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
    <div className="sm:text-center lg:text-left">
      <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-2xl sm:leading-none md:text-4xl">
        ENCUENTRA NEGOCIOS CON DOMICILIOS EN TU CIUDAD{" "}
        <span className="text-indigo-600">DURANTE LA CUARENTENA</span>
      </h2>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Conectamos a negocios con permiso para distribuir sus productos
        con familias que necesitan este servicio para ayudar con el
        distanciamiento social.
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <Link
            to="/home_shops"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
          >
            Buscar negocio
          </Link>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <Link
            to="/new_shop"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
          >
            Registrar negocio
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default HomeContent;
