import styled from "styled-components";
import tw from "tailwind.macro";

export const ButtonForm = styled.button`
  ${tw`mt-6 relative w-full flex justify-center py-4 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700`}
`;
export const InputForm = styled.input`
  ${tw`mb-6 appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 text-gray-900 rounded-b-md rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5`}
`;
export const TitleForm = styled.h2`
  ${tw`mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900`}
`;
export const LinkForm = styled.a`
  ${tw`font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline`}
`;
export const ContainerForm = styled.form`
  ${tw`min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8`}
`;