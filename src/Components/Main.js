import { React } from "react";
/* import lottie from "lottie-web"; */

const Main = () => {
  /*   const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require(".//globe-new-1.json"),
    });
  }, []); */
  return (
    <div className="flex flex-col mt-32 ml-12 md:flex md:flex-row">
      <ul className=" text-3xl md:text-4xl md:w-[50%] md:absolute md:left-[13rem] md:top-[18rem]  md:font-[4rem] lg:text-4xl 2xl:text-[5rem] 2xl:leading-[5rem]  font-play font-medium">
        <li>WE BUILD</li>
        <li>BRANDS OF </li>
        <li>THE FUTURE</li>
      </ul>
      <div className="container">
        <video
          className="ml-[28px] md:absolute md:right-[14rem]"
          autoPlay
          loop
          muted
          src="/bg-black_Trim.mp4"
        ></video>
      </div>
    </div>
  );
};

export default Main;
