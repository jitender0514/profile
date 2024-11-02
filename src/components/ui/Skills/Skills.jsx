import { themeClassMap } from '../../../lib/data'
import { useSectionInView } from '../../../hooks/hooks'
import { motion } from 'framer-motion'
import Divider from '../Divider'
import SectionHeading from '../SectionHeading/SectionHeading'

import { IoLogoJavascript } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { SiTypescript, SiMongodb, SiAxios, SiFramer, SiDjango, SiFastapi, SiCelery, SiGoogleanalytics } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaReact, FaNodeJs, FaBootstrap, FaDocker, FaHtml5, FaGitAlt, FaGithub, FaAws, FaPython } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { GrMysql } from "react-icons/gr";


const skillsData = [
  ["Python", <FaPython key={"Python"} />],
  ["Django", <SiDjango key={"Django"}/>],
  ["FastAPI", <SiFastapi key={"FastAPI"}/>],
  ["Celery", <SiCelery key={"Celery"}/>],
  ["Google Analytics", <SiGoogleanalytics key={"Google Analytics"}/>],
  ["Redis", <DiRedis key={"Redis"}/>],
  ["Javascript", <IoLogoJavascript key={"Javascript"}/>],
  ["Typescript", <SiTypescript key={"Typescript"}/>],
  ["Node.js", <FaNodeJs key={"Node"}/>],
  ["React", <FaReact key={"React"}/>],
  ["Bootstrap", <FaBootstrap key={"Bootstrap"}/>],
  ["Tailwind CSS", <RiTailwindCssFill key={"Tailwind"}/>],
  ["MongoDB", <SiMongodb key={"MongoDB"}/>],
  ["Axios", <SiAxios key={"Axios"}/>],
  ["PostgreSQL", <BiLogoPostgresql key={"PostgreSQL"}/>],
  ["HTML", <FaHtml5 key={"HTML"}/>],
  ["CSS", <IoLogoCss3 key={"CSS"}/>],
  ["Git", <FaGitAlt key={"Git"}/>],
  ["GitHub", <FaGithub key={"GitHub"}/>],
  ["Docker", <FaDocker key={"Docker"}/>],
  ["AWS", <FaAws key={"AWS"}/>],
  ["MySQL", <GrMysql key={"MySQL"}/>],
  ["Framer", <SiFramer key={"Framer"}/>],
  ["", <BsThreeDots key={"etc"}/>],
];





const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  }

const Skills = () => {
    const { ref } = useSectionInView('skills')

    return (
      <section
        id="skills"
        ref={ref}
        className={`pb-[150px] text-center sm:pb-40 py-24 w-full ${themeClassMap.text} flex flex-col items-center justify-center`}
      >
        <SectionHeading>My skills</SectionHeading>
        <ul className="flex flex-wrap justify-center items-center gap-2 text-lg text-gray-800 my-26 mb-[150px] max-w-[53rem]">
          {skillsData.map((skill, index) => (
            <motion.li
              className={"bg-gray-200 blue:bg-gray-300 borderBlack flex justify-center items-center rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"}
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              // viewport={{
              //   once: true,
              // }}
              custom={index}
            >
              <span className="mr-2">{skill[1]}</span>
              {skill[0]}
            </motion.li>
          ))}
        </ul>
        <div className="dark:bg-darkBg w-full flex justify-center">
          <Divider />
        </div>
      </section>
    )
}

export default Skills