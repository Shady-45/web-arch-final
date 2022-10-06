import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up">
      <div
        className="About
  font-play overflow-scroll transition duration-300"
      >
        <div className="about-main gap-6 font-play pd-4 font-extrabold text-[4rem]  mt-[9rem] flex flex-col items-center leading-[2rem] sm:items-center md:text-[6rem] md:leading-[4rem] lg:text-[12rem] lg:leading-[10rem] ">
          <h1 className="">GROW YOUR</h1>
          <h1>BUSINESS</h1>
          <h1>WITH US</h1>
        </div>
        <p className="text-3xl py-6 font-play font-semibold  text-center md:text-center md:py-6 lg:text-start lg:px-8 lg:py-10 ">
          what we do
        </p>
        <section>
          <div className="details mt-[6rem] pb-[8rem] flex flex-col lg:flex 2xl:flex 2xl:flex-row  font-play ">
            <img className="mt-[7rem]" src="/online-dress.png" alt="" />
            <div className="details-1 2xl:mt-[6rem] ml-[3rem] 2xl:ml-[40px]">
              <ol className="marker:text-lg">
                <li className="flex lg:flex-col 2xl:flex-row items-center ">
                  <span className="py-3 font-bold font-play text-[6rem]">
                    1
                  </span>
                  <p className="font-play font-bold text-[1.2rem] px-2">
                    We create products that revolve around people, Our unique
                    approach is called Arch design
                  </p>
                </li>
                <li className="flex items-center ">
                  {" "}
                  <span className="font-play text-[6rem] font-bold px-2 ">
                    2
                  </span>{" "}
                  <p className="font-play  font-bold  text-[1.2rem] px-2">
                    We adapt to the services to the problem we're solving
                  </p>
                </li>
                <li className="flex items-center ">
                  <span className=" font-play text-[6rem]    font-bold px-2 ">
                    3
                  </span>
                  <p className="font-play  font-bold  text-[1.2rem] px-2">
                    We design in constant cycles of iteration, untill we arrive
                    to the best possible solution
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="detail-2 pt-[2rem] items-center gap-4 2xl:pb-[20px] 2xl:flex font-play lg:flex lg flex-row md:items-center 2xl:flex-row-reverse">
            <img src="/portfolio.png" alt="" />
            <div className="details-2-info gap-[0.5rem] lg:m-auto flex flex-col justify-center 2xl:flex 2xl:ml-[44px]">
              <h1 className="font-bold text-[26px]  lg:text-[26px]">
                GET YOUR PROFESSIONAL PORTFOLIO
              </h1>
              <p className="2xl:text-[23px] text-[17px] font-bold">
                {" "}
                personal portfolio’s and designs are done here which makes your
                profile looks awesome 😎
              </p>
            </div>
          </div>
          <div className="details-three pt-[5rem] flex flex-col items-center lg:mt-[3rem] lg:flex lg:flex-row 2xl:flex 2xl:flex-row font-play  ">
            <img className="lg:px-[1rem]" src="/repair.png" alt="" />
            <div className="details-three-two flex flex-col  justify-center gap-4 md:flex  ">
              <h1 className="font-bold lg:text-[23px]   2xl:text-[23px]">
                FOR SMALLSCALE BIKE SERVICES SHOP
              </h1>
              <ul className="">
                <li className=" text-[20px] font-bold 2xl:text-[23px]">
                  clean and clear websites that makes coustoumer satifraction
                </li>
                <li className="font-bold text-[20px] 2xl:text-[23px] ">
                  bike shops and other smallbusiness automobile shops can get
                  their own website at low cost
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
