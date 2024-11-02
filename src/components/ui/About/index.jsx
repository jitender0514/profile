
import { useSectionInView } from '../../../hooks/hooks';
import { motion, useScroll, useTransform } from 'framer-motion'
import Divider from '../Divider';
import { useRef } from 'react';
import { smoothScrollTo } from '../../../utils/utils';
import { themeClassMap } from '../../../lib/data';

// import portfolioImg from '../../../assets/images/portfolio.png';
import profielImg from '../../../assets/images/profile2.jpg';

import SectionHeading from '../SectionHeading/SectionHeading';



const About = () => {
    const { ref } = useSectionInView('about', 0.4)
    const divRef = useRef(null);

    const { scrollYProgress} = useScroll({
        target: divRef,
        offset: ['0 1', '1.33 1'],
    });

    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1])

  return (
    <motion.section
      className={`flex flex-col  pt-20  items-center justify-center lg:justify-start leading-8  min-h-screen z-50 w-full ${themeClassMap.text}`}
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <motion.div
        className="w-full lg:w-[980px] xl:w-[1150px] lg:h-[700px] overflow-hidden"
        ref={divRef}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
      >
        <div className="gap-4 w-full h-full flex justify-center items-center">
        <div className="flex flex-col relative justify-center items-center text-center z-30">
            <div className="relative lg:w-[380px] lg:h-[380px] xl:w-[470px] xl:h-[470px]">
              {/* <div className="group-hover:opacity-60 transition-opacity absolute inset-0 bg-gradient-to-b from-[#ffcbb4] via-[#e0afa0] to-[#e29578] rounded-full z-20"></div> */}
              <div className="absolute inset-0">
                <img
                  src={profielImg}
                  alt="Profile image"
                  placeholder="blur"
                  width={470}
                  height={470}
                  className="rounded-full z-10 lg:w-[380px] lg:h-[380px] xl:w-[470px] xl:h-[470px]"
                />
              </div>
            </div>
          </div>
          <div className={`flex flex-col relative justify-center items-center text-center lg:text-start lg:block   max-w-96 lg:max-w-[580px] xl:max-w-[650px] text-md lg:text-lg z-40 font-semibold tracking-wide ${themeClassMap.text}`}>
            <div className="flex flex-col gap-6">
              <span>
                I&apos;m Full-stack developer with expertise in TypeScript,
                React, Next.js, Node.js, and database technologies
                (MongoDB/PostgreSQL/MySQL) utilizing Prisma for efficient data
                access. Proven ability to deliver user-centered web applications
                with a focus on intuitive experiences and user interaction.
              </span>
              <span>
                Seeking for Web Development opportunities where I can leverage
                my skills to create meaningful connections between products and
                users.
              </span>
              <p className="flex flex-col items-center lg:items-start">
                <span>So if you are interested,</span>
              </p>
              <p className="flex flex-col items-center lg:items-start">
              <a
                  href={'contact'}
                  onClick={(e) => {
                    smoothScrollTo({ e, id: 'contact' })
                  }}
                  className={`group w-64 sm:w-auto ${themeClassMap.btn} ${themeClassMap.btnColor} px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack justify-center`}
                >
                  <span className="">
                    Contact me!
                  </span>
                </a>
                </p>
            </div>
          </div>
        </div>
      </motion.div>
      <Divider />
    </motion.section>
  )
}

export default About
