import React from 'react';
import { useSectionInView } from "../../../hooks/hooks";
import Divider from "../Divider";
import SectionHeading from "../SectionHeading/SectionHeading";
import { projectsData, themeClassMap } from "../../../lib/data";
import ProjectCard from "./ProjectCard";


export default function Projects() {

    const {ref} = useSectionInView('projects', 0.25);

    return (
        <section
      className={`flex flex-col justify-center items-center w-full min-h-screen pt-20 ${themeClassMap.text}`}
      id="projects"
      ref={ref}
    >
      <SectionHeading>My Recent Works</SectionHeading>
      <div className="my-24">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
      <Divider />
    </section>
    )

}