import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  const goToTop = () => {
    window.scrollTo({
      top: 2,
      behavior: "auto",
    });
  };
  return (
    <>
      <div className=" w-full fixed top-0 left-0">
        <div className="md:flex items-center  bg-white py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center  
    text-gray-800"
          >
            <Link to="/">
              <div className="title flex flex-col">
                <div className="first-part flex ">
                  <h1 className="text-2xl flex  font-bold">WEB</h1>
                  <p className="h-2 w-2 mt-5  bg-green-500 border-solid border-green-500 rounded-2xl"></p>
                </div>
                <div className="second-part">
                  <h1 className="text-sm mt-[-11px]  ml-[11px] font-bold">
                    ARCH
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-5 cursor-pointer  md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:text-center  md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] rounded-lg font-play ml-[45em] gap-[3em] left-0 w-full  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            <Link to="/about" onClick={goToTop}>
              <li className="md:ml-8 cursor-pointer  font-serif  text-xl hover:border-b-2 hover:border-b-black hover:duration-200 hover:scale-[1,2] hover:delay-300  hover:ease-in-out  md:my-0 my-7">
                about
              </li>
            </Link>
            <Link to="/works">
              <li className="md:ml-8 cursor-pointer font-serif  text-xl   md:my-0 my-7 hover:border-b-2 hover:border-b-black hover:duration-200 hover:scale-[1,2] hover:delay-300  hover:ease-in-out ">
                works
              </li>
            </Link>
            <Link to="/pricing">
              <li className="md:ml-8 cursor-pointer font-serif  text-xl hover:border-b-2 hover:border-b-black hover:duration-200 hover:scale-[1,2] hover:delay-300  hover:ease-in-out md:my-0 my-7">
                pricing
              </li>
            </Link>
            <Link to="/contact">
              <li className="md:ml-8 cursor-pointer  font-serif text-xl  hover:border-b-2 hover:border-b-black hover:duration-200 hover:scale-[1,2] hover:delay-300  hover:ease-in-out md:my-0 my-7">
                contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
