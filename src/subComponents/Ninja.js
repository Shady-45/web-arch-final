import React from "react";

const Ninja = () => {
  return (
    <div className=" fixed  h-[100vh] w-[100%] z-[100] bg-white ">
      <div className="animate-spin  h-[5rem] w-[5rem] mt-[15rem] ml-[13rem] md:mt-[15rem] md:ml-[21rem] lg:mt-[18rem] lg:ml-[45rem]">
        <svg
          aria-hidden="true"
          data-prefix="fas"
          data-icon="yin-yang"
          className=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z" />
        </svg>
      </div>
    </div>
  );
};

export default Ninja;
