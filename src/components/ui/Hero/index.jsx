// import React from 'react'
import { motion } from "framer-motion";
import { smoothScrollTo } from "../../../utils/utils";
import { CircleUser, Download, Image, Linkedin } from "lucide-react";
import { useActiveSectionContext } from "../../../contexts/acitve-section";
import Divider from "../Divider";
import { useSectionInView } from "../../../hooks/hooks";
import TextAnimation from "../TextAnimation";

const Hero = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView('home');
  return (
    <>
      {/* <div className="hero-section"> */}
      <section
        className="flex flex-col min-h-screen w-full scroll-mt-36 justify-center items-center relative hero-section"
        id="home"
        ref={ref}
      >
        <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
        <a
          className="flex justify-center items-center absolute right-10 bottom-10 sm:right-16 sm:bottom-16 lg:right-24 lg:bottom-24 cursor-pointer z-[49]"
          onClick={(e) => {
            smoothScrollTo({ e, id: "about" });
          }}
        >
          <motion.span
            className="w-2 h-10 bg-black  dark:bg-[#ddbea9] rounded-lg m-2"
            initial={{ y: 0, rotate: -45 }}
            animate={{ y: [0, 25, 0], rotate: [-45, -45, -45] }}
            transition={{
              duration: 1.1,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          <motion.span
            className="w-2 h-10 bg-black dark:bg-[#ddbea9] rounded-lg m-2"
            initial={{ y: 0, rotate: 45 }}
            animate={{ y: [0, 25, 0], rotate: [45, 45, 45] }}
            transition={{
              duration: 1.1,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </a>
        <div className="top-36 lg:top-48 flex flex-col items-start justify-center container tracking-wide text-black dark:text-white">
          <div className="relative w-full h-full container">
            <div className="lg:text-[3rem] text-[2rem] font-extrabold lg:mb-5 text-start h-72 w-[280px] sm:w-[520px] md:w-[700px] lg:w-[920px]">
              <span className="font-extrabold mb-10 text-start">Hey!👋</span>
              <br />
              <TextAnimation delay={1} baseText={`I'm Jitender Singh`} />
            </div>
            <p className="lg:text-[1.5rem] text-[1.5rem] font-extrabold lg:mb-5 text-start h-72 w-[280px] sm:w-[520px] md:w-[700px] lg:w-[920px]">Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving a complex and challenging real-world problems.</p>
            <motion.div
              className="flex flex-col md:flex-row w-92 items-center md:mt-12 justify-center gap-3 px-4 lg:text-lg font-medium text-sm"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            >
              <a
                className="group w-64 sm:w-auto bg-darkBg text-white hover:dark:text-black px-7 py-3 cursor-pointer flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-darkBeige active:scale-105 transition justify-center"
                onClick={(e) => {
                  smoothScrollTo({ e, id: "contact" });
                  setActiveSection("contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact me here{" "}
                <CircleUser className="opacity-70 group-hover:opacity-80" />
              </a>

              <a
                className="group w-64 sm:w-auto bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 justify-center"
                href="/Resume.pdf"
                download
              >
                Download CV{" "}
                <Download className="opacity-60 group-hover:opacity-100" />
              </a>

              <div className="flex gap-2 ">
                <a
                  className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center justify-center gap-2 rounded-full w-[60px] h-[60px] focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://www.linkedin.com/in/jitender-singh-65772875/"
                  target="_blank"
                >
                  <Linkedin />
                </a>

                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-105 hover:scale-105 hover:text-gray-950 w-[60px] h-[60px] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 justify-center"
                  href="https://github.com/jitender0514"
                  target="_blank"
                >
                  <Image
                    width={25}
                    height={25}
                    src={"/svgs/github.svg"}
                    alt="github icon"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      <div className="dark:bg-darkBg w-full flex justify-center">
        <Divider />
      </div>
      {/* </div> */}
    </>
  );
};

export default Hero;
