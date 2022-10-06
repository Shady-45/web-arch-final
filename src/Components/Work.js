import { React, useEffect } from "react";

import AOS from "aos";
import Slider from "react-slick";
import { TbX } from "react-icons/tb";
import { Link } from "react-router-dom";

function Work() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="bg-black"
      data-aos="fade-right"
      data-aos-offset="10"
      data-aos-easing="ease-in-sine"
    >
      {/*<a href="#"><h2 className='text-white text-3xl m-2'>Web<br/>Arch</h2></a>*/}
      <div className="absolute bg-black right-[0rem]">
        <Link to="/">
          <TbX className="text-blue-300 m-10 hover:border hover:text-2xl  text-2xl cursor-pointer" />
        </Link>
      </div>
      <h1 className="text-8xl font-semibold mt-15 text-white p-9 m-7">
        {" "}
        OUR WORKS
      </h1>

      <Slider {...settings} className="w-50">
        <div>
          <h3>
            <div className="flex flex-col gap-10 p-20 lg:flex-row">
              <img
                src="/Frame.jpg"
                alt="Frame"
                className="logo cursor-pointer opacity-[0.5] hover:opacity-[1]"
                width={550}
                height={600}
              />

              <br />
              <p className="text-white text-xl cursor-pointer justify-center">
                {" "}
                <b>01</b>.App for women's safety <br />
                UI Design
                <br /> UX wireframe
              </p>
            </div>
          </h3>
        </div>
        <div>
          <h3>
            <div className="flex flex-col gap-10 p-20 lg:flex-row ">
              <img
                src="/Together.jpeg"
                alt="together"
                className="logo cursor-pointer opacity-[0.5] hover:opacity-[1] "
                width={550}
                height={600}
              />

              <br />
              <p className="text-white text-xl cursor-pointer">
                {" "}
                <b>02</b>. website for women's safety <br />
                UI Design <br />
                UX wireframes
              </p>
            </div>
          </h3>
        </div>
      </Slider>

      {/*  <a href="#"><h2 className='text-white text-3xl m-2'>Web<br/>Arch</h2></a>
<h1 className='text-7xl font-semibold mt-15 text-white p-10 m-10 '>  OUR WORKS</h1>

<div className='flex '>

<div className='flex flex-col gap-10 p-20 lg:flex-row '>

   <img src={Frame} className="logo cursor-pointer opacity-[0.5] hover:opacity-[1]" width={500} height={500}/>
 
<p className='text-white text-xl cursor-pointer '> <b>01</b>.App for women's safety UI Design UX wireframe</p>
</div>

<div className='flex flex-col gap-10 p-20 lg:flex-row '>
   <img src={Together} className="logo cursor-pointer opacity-[0.5] hover:opacity-[1] " width={500} height={500}/>


<p className='text-white text-xl cursor-pointer'> <b>02</b>. website for women's safety UI Design UX wireframes</p>

</div>
    </div> */}
    </div>
  );
}

export default Work;
