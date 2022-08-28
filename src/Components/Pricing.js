import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const Pricing = () => {
  return (
    <div className="pricing h-[100vh] ">
      <div className="pricing-top flex lg:gap-[17rem] pt-[8rem] flex-col md:flex md:flex-row">
        <img className="  max-h-[25rem] top-[12rem] " src="/price.jpg" alt="" />
        <form className=" justify-center top-[19rem] flex flex-col pl-[16rem] pt-[6rem] ml-[-15rem]">
          <input
            className="  placeholder:font-bold placeholder:text-black h-[2rem] w-[32rem] my-[1rem]  border-b-[4px] border-b-black"
            type="text"
            placeholder="Enter Name:"
            name=""
            id=""
          />
          <input
            className="  my-[1rem] placeholder:font-bold placeholder:text-black h-[2rem] w-[32rem] border-b-4 border-b-black  "
            type="email"
            name="email"
            placeholder="Enter Email:"
            id=""
          />
          <input
            className="  placeholder:font-bold placeholder:text-black  my-[1rem] h-[2rem] w-[32rem] border-b-4 border-b-black   "
            type="tel"
            name=""
            placeholder="Enter Mobile Number:"
            id=""
          />
          <button className=" h-[2.5rem] bg-blue-500 text-white w-[23rem] border-1 border-blue-500 rounded-lg m-auto ">
            Submit Now
          </button>
        </form>
      </div>
      <div className="pricing-bottom flex md:flex md:flex-row lg:flex lg:flex-row lg:mt-[5rem] ">
        <div className="  flex flex-col gap-4 ml-[7rem] mt-[2em] lg:flex lg:flex-row lg:m-auto lg:gap-[8rem]">
          <div className="card-1 m-auto  left-2 top-[17rem] border-2 border-black h-[25rem] max-w-[20rem]">
            <h1 className="font-bold text-xl mt-[1rem] ml-[1rem]">Basic</h1>
            <div className="prices-contact  flex items-center">
              <p className="ml-[6rem] text-green-600 text-lg font-semibold">
                <span>Rs</span>6000
              </p>
              <button className="contact ml-[1rem] bg-gray-500  text-white h-[3rem] w-[8rem] ">
                CONTACT
              </button>
            </div>
            <h3 className="include bg-black text-white text-[14px]">
              WHAT'S INCLUDED
            </h3>
            <div className="items-products m-[3rem]">
              <ul>
                <li className="list-none  flex items-center ">
                  <BsCheckCircle className="hover:animate-pulse" />
                  <p className="ml-[9px]">Hosting</p>
                </li>
                <li className="list-none  flex items-center ">
                  <BsCheckCircle />
                  <p className="ml-[9px]">No of pages:4</p>
                </li>
                <li className="list-none  flex items-center">
                  <BsCheckCircle />
                  <p className="ml-[9px]">Whatsapp chat</p>
                </li>
                <li className="list-none  flex items-center ">
                  <BsCheckCircle />
                  <p className="ml-[9px]">Call to Action Button</p>
                </li>
                <li className="list-none flex items-center ">
                  <BsCheckCircle />
                  <p className="ml-[9px]">100% Responsive</p>
                </li>
                <li className="list-none  flex items-center ">
                  <BsCheckCircle />
                  <p className="ml-[9px]">Delivery in 7 Days</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-2 m-auto left-2 top-[17rem] border-2 border-black h-[25rem] max-w-[20rem]">
            <h1 className="font-bold text-xl mt-[1rem] ml-[1rem]">Basic</h1>
            <div className="prices-contact  flex items-center">
              <p className="ml-[6rem] text-green-600 text-lg font-semibold">
                <span>Rs</span>6000
              </p>
              <button className="contact ml-[1rem]  bg-gray-500 text-white h-[3rem] w-[8rem] ">
                CONTACT
              </button>
            </div>
            <h3 className="include bg-black text-white text-[14px]">
              WHAT'S INCLUDED
            </h3>
            <div className="items-products m-[3rem]">
              <ul>
                <li className="list-none  flex items-center ">
                  <BsCheckCircle />
                  <p className="ml-[9px]">Hosting</p>
                </li>
                <li className="list-none  flex items-center ">
                  <BsCheckCircle />
                  <p className="ml-[9px]">No of pages:4</p>
                </li>
                <li className="list-none  flex items-center">
                  <BsCheckCircle />
                  <p className="ml-[9px]">Whatsapp chat</p>
                </li>
                <li className="list-none  flex items-center ">
                  <BsCheckCircle />
                  <p className="ml-[9px]">Call to Action Button</p>
                </li>
                <li className="list-none flex items-center ">
                  <BsCheckCircle />
                  <p className="ml-[9px]">100% Responsive</p>
                </li>
                <li className="list-none  flex items-center ">
                  <BsCheckCircle />
                  <p className="ml-[9px]">Delivery in 7 Days</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-3 mx-4  left-2 top-[17rem] border-2 border-black h-[25rem] max-w-[20rem]">
            <h1 className="font-bold text-xl mt-[1rem] ml-[1rem]">Basic</h1>
            <div className="prices-contact  flex items-center">
              <p className="ml-[6rem] text-green-600 text-lg font-semibold">
                <span>Rs</span>6000
              </p>
              <button className="contact ml-[1rem] bg-gray-500 text-white h-[3rem] w-[8rem] ">
                CONTACT
              </button>
            </div>
            <h3 className="include bg-black text-white text-[14px]">
              WHAT'S INCLUDED
            </h3>
            <div className="items-products m-[3rem]">
              <ul>
                <li className="list-none  flex items-center ">
                  <BsCheckCircle />
                  <p className="ml-[9px]">Hosting</p>
                </li>
                <li className="list-none  flex items-center ">
                  <BsCheckCircle />
                  <p className="ml-[9px]">No of pages:4</p>
                </li>
                <li className="list-none  flex items-center">
                  <BsCheckCircle />
                  <p className="ml-[9px]">Whatsapp chat</p>
                </li>
                <li className="list-none  flex items-center ">
                  <BsCheckCircle />
                  <p className="ml-[9px]">Call to Action Button</p>
                </li>
                <li className="list-none flex items-center ">
                  <BsCheckCircle />
                  <p className="ml-[9px]">100% Responsive</p>
                </li>
                <li className="list-none  flex items-center ">
                  <BsCheckCircle />
                  <p className="ml-[9px]">Delivery in 7 Days</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
