import PropTypes from 'prop-types'
import {useRef} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { themeClassMap } from '../../../lib/data'



const ProjectCard = ({title, description, tags, imageUrl, link, }) => {

    const ref = useRef(null)

    const { scrollYProgress} = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1'],
    })

    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])


  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <a href={link} target="_blank">
        <section
          className={
            `max-w-[52rem]  border-2 rounded-lg overflow-hidden relative sm:h-[20rem] transition ${themeClassMap.hover} ${themeClassMap.border} ${themeClassMap.projectCard}`
          }
        >
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold uppercase"> {title}</h3>
            <p className="mt-2 leading-relaxed">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className={` ${themeClassMap.btnColor} ${themeClassMap.btn} px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full`}
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <img
            src={imageUrl}
            alt="Project I worked on"
            // quality={95}
            className={`absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg ${
              title.toLowerCase() === 'filedrive' ? '' : 'shadow-2xl'
            }
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
          
          group-even:right-[initial] group-even:-left-40`}
          />
        </section>
      </a>
    </motion.div>
  )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };

export default ProjectCard
