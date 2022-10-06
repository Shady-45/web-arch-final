import { useState, useEffect } from "react";
import { React } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Ninja from "../subComponents/Ninja";
/* import lottie from "lottie-web"; */

const Main = () => {
  const [loading, Setloading] = useState(false);

  useEffect(() => {
    Setloading(true);
    setTimeout(() => {
      Setloading(false);
    }, 3000);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      {loading ? (
        <Ninja />
      ) : (
        <div className=" fullin flex flex-col mt-[9rem] items-center md:flex md:flex-row md:justify-center lg:justify-center lg:gap-[6rem] ">
          <div data-aos="fade-right">
            <p
              className="font-play max-w-md font-medium text-[4rem] leading-[4rem] ml-[3rem] lg:text-[6rem] lg:max-w-[45rem] lg:leading-[6rem]
      "
            >
              WE BUILD BRANDS OF THE FUTURE
            </p>
          </div>
          <div data-aos="fade-left">
            <img
              className="max-h-[20rem] max-w-[20rem] lg:max-h-[25rem] "
              src="/black-globe.gif"
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
