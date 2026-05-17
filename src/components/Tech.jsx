import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

import {
  javascript, java, html, css, mysql, github
} from "../assets";

const SkillCard = ({ name, icon }) => (
  <div className="w-24 h-24 xs:w-32 xs:h-32 flex flex-col items-center justify-center p-4 rounded-2xl glass-morphism group relative border border-white/5 hover:border-accent/50 hover:shadow-premium z-10 transition-all duration-300 hover:scale-110">
    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
    <img
      src={icon}
      alt={name}
      className="w-12 h-12 xs:w-16 xs:h-16 object-contain z-10"
    />
    <p className="mt-2 text-secondary text-[10px] xs:text-[12px] font-medium z-10 group-hover:text-white transition-colors duration-300">
      {name}
    </p>
  </div>
);

const Tech = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView, mainControls]);

  const categories = [
    {
      title: "Programming & Development",
      skills: [
        { name: "Java", icon: java },
        { name: "JavaScript", icon: javascript },
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "SQL", icon: mysql },
        { name: "GitHub", icon: github },
      ]
    }
  ];

  return (
    <div ref={ref} className="w-full">
      <motion.div variants={textVariant()} initial="hidden" animate={mainControls}>
        <p className={`${styles.sectionSubText} text-center`}>Technical Proficiencies</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col gap-16">
        {categories.map((category, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + idx * 0.2 }}
              className="text-white text-2xl font-bold mb-10 border-l-4 border-accent pl-4 self-start md:self-center"
            >
              {category.title}
            </motion.h3>
            <motion.div 
              initial="hidden"
              animate={mainControls}
              className="flex flex-wrap justify-center gap-6"
            >
              {category.skills.map((skill, index) => (
                <SkillCard key={skill.name} index={index} {...skill} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default SectionWrapper(Tech, "skills");