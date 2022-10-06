import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import { TbX } from "react-icons/tb";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row bg-black">
      <div data-aos="fade-right">
        <div className="flex flex-row  lg:flex-row">
          <h1 className="text-8xl  text-white   m-8  pt-10 font-serif ">
            CONTACT US
          </h1>
          <div className="absolute right-[-35rem]">
            <Link to="/">
              <TbX className="text-blue-300 m-10 hover:border hover:text-2xl  text-2xl cursor-pointer" />
            </Link>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <p className="text-4xl text-white  pt-10 m-8 font-serif">
          <a href="mailto:webarchtechnologies2020@gmail.com">
            webarchtechnologies2020@gmail.com
          </a>
        </p>
        <hr className="text-white m-8 w-45 "></hr>
        <p className="text-2xl text-white m-8 pt-10  font-serif">
          INDIA
          <br />
          <br />
          +91 9600052850
          <br />
          <br />
          Follow us
        </p>

        <div className="flex flex-row  lg:flex-row m-8">
          <a href="/">
            <BsFacebook className="text-white m-5 text-lg cursor-pointer" />{" "}
          </a>
          <a href="/">
            <FaInstagram className="text-white m-5 text-lg cursor-pointer" />
          </a>
          <a href="/">
            <FaTwitter className="text-white m-5 text-lg cursor-pointer" />
          </a>

          <a href="/">
            <FaLinkedin className="text-white m-5 text-lg cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
