import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion, useAnimation, useInView } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_project_link,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
      }}
    >
      <Tilt
        options={{
          max: 15,
          scale: 1.05,
          speed: 450,
        }}
        className="glass-morphism-premium p-5 rounded-2xl sm:w-[360px] w-full group relative overflow-hidden"
      >
        {/* Animated Border Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-[-1px] bg-gradient-to-r from-accent via-blue-500 to-accent rounded-2xl blur-sm opacity-30 animate-pulse" />
        </div>

        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform shadow-premium"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] group-hover:text-accent transition-colors">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] line-clamp-3">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p key={index} className={`text-[14px] ${tag.color} opacity-80`}>
              #{tag.name}
            </p>
          ))}
        </div>

        {source_code_link && (
          <motion.a 
            href={source_code_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block mt-5"
          >
            <button className="w-full py-2 px-4 rounded-xl bg-accent/20 border border-accent/30 text-white font-medium hover:bg-accent transition-all duration-300 hover:shadow-premium">
              View Source Code
            </button>
          </motion.a>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="text-center"
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Featured Projects.</h2>
      </motion.div>

      <div className="w-full flex justify-center text-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-20 flex flex-wrap gap-7 justify-center"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
