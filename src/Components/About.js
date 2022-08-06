import React from "react";

const About = () => {
  return (
    <div
      className="About
  font-play"
    >
      <div className="abt-1 flex flex-col text-4xl ml-[1rem] mr-[2rem] font-extrabold sm:text-6xl sm:font-extrabold sm:ml-8 sm:mt-8 md:text-7xl lg:text-8xl lg:ml-[11rem] sm:h-[80vh] md:h-[70vh] lg:h-[120vh] 2xl:h-[135vh] lg:mt-[6rem] 2xl:text-[10rem] 2xl:ml-[2rem] 2xl:mt-[6rem]">
        <h1 className="sm:ml-16">GROW YOUR</h1>
        <h1 className="  ml-[7rem] sm:mt-[1rem] sm:ml-[10rem] md:ml-[15rem] lg:mt-[3rem] lg:ml-[20rem] 2xl:ml-[30rem]">
          BUSINESS
        </h1>
        <h1 className="sm:mt-[1rem] sm:ml-[4rem]">WITH US</h1>
      </div>

      <section>
        <p className="font-bold font-play text-[2rem] mt-[2rem] sm:mt-[-18rem] md:mt-[-12rem] 2xl:ml-8 lg:mt-[-25rem] 2xl:mt-[-5rem]">
          what we do
        </p>

        <div className="details mt-[-5rem] flex flex-col lg:flex lg:flex-row 2xl:flex 2xl:flex-row font-play ">
          <img className="mt-[7rem]" src="/online-dress.png" alt="" />
          <div className="details-1 2xl:mt-[41px] 2xl:ml-[40px]">
            <ol className="">
              <li className="w-[97%]">
                <hr className="bg-black sm:bg-black  md:hidden lg:hidden 2xl:hidden " />
                <p className="2xl:text-2xl 2xl:w-[80%] 2xl:flex 2xl:items-center 2xl:mb-[21px] 2xl:text-center 2xl:gap-[31px] 2xl:ml-[56px] 2xl:font-medium">
                  <span className="text-[100px] 2xl:mt-[-29px] font-medium">
                    1
                  </span>{" "}
                  We create products that revolve around people. Our unique
                  approach is called Arch design
                </p>
              </li>
              <hr className="bg-black sm:bg-black  md:hidden lg:hidden 2xl:hidden " />
              <li>
                <p className="2xl:text-2xl 2xl:text-center 2xl:w-[76%] 2xl:flex 2xl:items-center 2xl:gap-[45px]  2xl:ml-[112px] 2xl:mt-[86px]  2xl:font-medium">
                  <span className="text-[100px] font-medium">2</span> We adapt
                  our services to the problem we’re solving.
                </p>
              </li>
              <hr className="bg-black sm:bg-black  md:hidden lg:hidden 2xl:hidden " />
              <li>
                <p className="2xl:text-2xl 2xl:flex    2xl:mt-[39px] 2xl:w-[72%] 2xl:ml-[112px] items-end 2xl:gap-[43px]   2xl:font-normal">
                  <span className="text-8xl font-medium">3</span> And we design
                  in constant cycles of iteration, until we arrive at the best
                  possible solution.
                </p>
              </li>
              <hr className="bg-black sm:bg-black  md:hidden lg:hidden 2xl:hidden " />
            </ol>
          </div>
        </div>
        <div className="detail-2  2xl:pb-[20px] 2xl:flex font-play 2xl:flex-row-reverse">
          <img src="/portfolio.png" alt="" />
          <div className="details-2-info 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:ml-[44px]">
            <h1 className="font-bold text-[23px]">
              GET YOUR PROFESSIONAL PORTFOLIO
            </h1>
            <p className="2xl:text-[23px]">
              {" "}
              personal portfolio’s and designs are done here which makes your
              profile looks awesome 😎
            </p>
          </div>
        </div>
        <div className="details-three 2xl:flex font-play ">
          <img src="/repair.png" alt="" />
          <div className="details-three-two 2xl:flex justify-center 2xl:ml-[81px] 2xl:mb-[9px] 2xl:flex-col">
            <h1 className="font-bold 2xl:pb-[31px] 2xl:text-[23px]">
              FOR SMALLSCALE BIKE SERVICES SHOP
            </h1>
            <ul className="2xl:text-[23px]">
              <li className="2xl:pb-[12px]">
                clean and clear websites that makes coustoumer satifraction
              </li>
              <li>
                bike shops and other smallbusiness automobile shops can get
                their own website at low cost
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="logo flex h-7 mt-[264px] justify-center gap-[20px]">
        <div className="logo-first flex flex-col gap-[36px]">
          <img className=" h-[95px] w-[40px] " src="/circle.png" alt="" />
          <img className="h-[75px] " src="/w.png" alt="" />
        </div>
        <div className="logo-line gap-[3em] flex flex-col-reverse">
          <img
            className="h-[75px] mt-[15px] mb-[-180px] w-[51px] "
            data-aos="zoom-in"
            src="/E.png"
            alt=""
          />
          <img className="h-[75px] ml-[0px] " src="/Line.png" alt="" />
        </div>

        <img className=" h-[75px] mt-[74px] " src="/B.png" alt="" />
        <img
          className="h-[150px] mt-[27px] "
          data-aos="zoom-in"
          src="/A.png"
          alt=""
        />
        <div className="logo-line-two">
          <img className=" h-[75px] mt-[29px] " src="/R.png" alt="" />
          <img className=" h-[75px] mt-[29px] " src="/Line.png" alt="" />
        </div>

        <img
          className=" h-[75px] mt-[91px] "
          data-aos="zoom-in"
          src="/C.png"
          alt=""
        />
        <div className="logo-two flex flex-col ">
          <img className="h-[75px] mt-[34px]" src="/H.png" alt="" />
          <img className="mt-[105px] w-[43px]" src="/Rectangle.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
