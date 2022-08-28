import { React } from "react";
/* import lottie from "lottie-web"; */

const Main = () => {
  return (
    <div className=" fullin flex flex-col mt-[9rem] items-center md:flex md:flex-row md:justify-center lg:justify-center lg:gap-[6rem] ">
      <p
        className="font-play max-w-md font-medium text-[4rem] leading-[4rem] ml-[3rem] lg:text-[6rem] lg:max-w-[45rem] lg:leading-[6rem]
      "
      >
        WE BUILD BRANDS OF THE FUTURE
      </p>
      <img
        className="max-h-[20rem] max-w-[20rem] lg:max-h-[25rem] "
        src="/black-globe.gif"
        alt=""
      />
    </div>
  );
};

export default Main;
