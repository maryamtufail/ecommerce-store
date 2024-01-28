import React from "react";
import { Link } from "react-router-dom";
import SignInForm from "../containers/signin";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import useDocumentTitle from "../hooks/useDocumentTitle";

const SignIn = () => {

  useDocumentTitle("Salinaka | Sign In");
  
  return (
    <section>
      <div className="w-[80rem] h-auto mt-12 m-auto flex border justify-center max-w-screen-lg ">
        {/* Left */}
        <div className=" p-4 md:p-8 flex-grow">
          <div className="w-full">
            <h3 className="text-[#1a1a1a] font-semibold mb-4">
              Sign up to Salinaka
            </h3>
            <SignInForm />
          </div>
        </div>
        {/* Center */}
        <div className="relative flex items-center px-12">
          <div className="h-[12rem] w-[1px] bg-gray-700 ml-3"></div>
          <h6 className="z-10 absolute  bg-white">OR</h6>
        </div>

        {/* Right */}
        <div className="flex-grow items-center justify-center flex flex-col gap-3">
          <button
            className="mb-[1rem] bg-blue-400 text-white border w-[250px] relative flex justify-center items-center p-[1rem]"
            type="button"
          >
            <FaFacebook className="inline-block mr-2" />
            Continue with Facebook
          </button>

          <button
            className="mb-[1rem] bg-black text-gray-100 border w-[250px] relative flex justify-center items-center p-[1rem]"
            type="button"
          >
            <FaGoogle className="inline-block mr-2" />
            Continue with Google
          </button>

          <button
            className="mb-[1rem] bg-gray-700 text-white border w-[250px] relative flex justify-center items-center p-[1rem]"
            type="button"
          >
            <FaGithub className="inline-block mr-2" />
            Continue with GitHub
          </button>
        </div>
      </div>
      <div className="max-w-screen-lg flex justify-center items-center p-6 m-auto bg-[#f2f2f2] ">
        <span className="mr-[3.2rem] font-semibold text-sm text-gray-500">
          Already have an account?
        </span>
        <Link
          to="/signup"
          className="block text-sm px-4 ml-2 py-2 border-2 border-gray-300 bg-gray-200 text-gray-500 hover:bg-white font-semibold mt-4 lg:mt-0"
        >
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default SignIn;
