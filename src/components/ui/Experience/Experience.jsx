import React, { useContext } from "react";
import Divider from "../Divider";
import SectionHeading from "../SectionHeading/SectionHeading";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from 'react-vertical-timeline-component'

import { experiencesData, themeClassMap } from "../../../lib/data";
import 'react-vertical-timeline-component/style.min.css';
import { useSectionInView, useHasMounted } from "../../../hooks/hooks";
import { ThemeContext } from "../../../contexts/theme";

export default function Experience() {

    const {ref} = useSectionInView('experience')
    const hasMounted = useHasMounted()
    const {theme} = useContext(ThemeContext);

    return (
        <section
          id="experience"
          ref={ref}
          className={`mt-20 scroll-mt-12 w-full ${themeClassMap.text}`}
        >
          <SectionHeading>My experience</SectionHeading>
          <VerticalTimeline animate={true} lineColor={'#ccc'} >
            {hasMounted &&
              experiencesData.map((item, index) => (
                <React.Fragment key={index}>
                  <VerticalTimelineElement
                    contentStyle={{
                    //   background:
                    //     theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                    background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                      boxShadow: 'none',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      textAlign: 'left',
                      padding: '1.3rem 2rem',
                    }}
                    contentArrowStyle={{
                        borderRight: '0.4rem solid #9ca3af',
                        display: 'block'
  
                    //   borderRight:
                    //     theme === 'light'
                    //       ? '0.4rem solid #9ca3af'
                    //       : '0.4rem solid rgba(255, 255, 255, 0.5)',
                    //   display: theme === 'dark' ? 'none' : 'block',
                    }}
                    date={item.date}
                    dateClassName={`${themeClassMap.text}`}
                    icon={item.icon}
                    // iconStyle={{
                    //     background: "#fff",
                    // //   background:
                    // //     theme === 'light' ? '#fff' : 'rgba(255, 255, 255, 0.15)',
                    //   fontSize: '1.5rem',
                    //   display: 'flex'
                    // //   display: theme === 'dark' ? 'none' : 'flex',
                    // }}
                    iconClassName={`${themeClassMap.text} ${themeClassMap.bg}`}
                    className={`vertical-timeline-element--work ${themeClassMap.text} `}
                  >
                    <div className="font-bold text-xl capitalize">{item?.title}</div>
                    <p className="font-normal italic text-lg">{item?.location}</p>
                    <p className="font-normal">
                      {item?.description}
                    </p>
                  </VerticalTimelineElement>
                </React.Fragment>
              ))}
          </VerticalTimeline>
          <div className=" mt-20 dark:bg-darkBg w-full flex justify-center">
            <Divider />
          </div>
        </section>
      )




}