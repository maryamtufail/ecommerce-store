import React from "react";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-12 mt-8">
    {/* Left Section */}
    <div className="w-1/3">
      <strong className="font-semibold text-[#4a4a4a] text-sm">
        Developed by <a className="underline" href="https://github.com/maryamtufail">Maryam Tufail</a>
      </strong>
    </div>
  
    {/* Center Section */}
    <div className="flex flex-col items-center w-1/3">
      <img
        src="/images/logo.png"
        className="w-24 h-12 object-contain mb-2"
        alt="footer-logo"
      />
      <h5 className="text-center">© 2024</h5>
    </div>
  
    {/* Right Section */}
    <div className="w-1/3 text-right">
      <strong className="font-semibold text-[#4a4a4a] text-md">
        Fork this project <a className="underline" href="https://github.com/maryamtufail">Here</a>
      </strong>
    </div>
  </footer>
  
  );
};
