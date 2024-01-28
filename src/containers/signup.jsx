import React from "react";
import { FaArrowRight } from "react-icons/fa";

const SignUpForm = () => {
  return (
    <>
      {/* Form */}
      <form action="#">
        <div className="auth-field">
          <div className="flex flex-col">
            <label className="bg-none p-3 text-gray-500 " htmlFor="fullname">
              * Full Name
            </label>
            <input
              type="text"
              id="fullname"
              className="p-3 border"
              name="fullname"
              placeholder="John Doe"
              value=""
              style={{ textTransform: "capitalize" }}
            />
          </div>
        </div>

        <div className="auth-field">
          <div className="flex flex-col">
            <label className="bg-none p-3 text-gray-500 " htmlFor="email">
              * Email
            </label>
            <input
              type="email"
              id="email"
              className="p-3  border"
              name="email"
              placeholder="test@example.com"
              value="rede@hgmaul.com"
            />
          </div>
        </div>

        <div className="auth-field">
          <div className="flex flex-col">
            <label className="bg-none p-3 text-gray-500 " htmlFor="password">
              * Password
            </label>
            <input
              type="password"
              id="password"
              className="p-3  border"
              name="password"
              placeholder="Your Password"
              value="dfdsdfsasasA"
            />
          </div>
        </div>

        <br />

        <div className="flex justify-end">
          <button
            className="bg-black p-[1rem] border text-white realtive flex items-center justify-center font-[700]"
            type="submit"
          >
            Sign Up&nbsp;
            <FaArrowRight className="inline-block" />
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
