import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState, useEffect } from "react";

const TypewriterText = ({ texts }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        const currentText = texts[currentIndex];
        if (displayText.length < currentText.length) {
          setDisplayText((prevText) => currentText.slice(0, prevText.length + 1));
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsTyping(true);
            setDisplayText("");
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, 2000);
        }
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [currentIndex, isTyping, texts, displayText]);

  return (
    <span className="inline-block text-accent font-bold">
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block ml-1"
      >
        _
      </motion.span>
    </span>
  );
};

const Hero = () => {
  const typedItems = [
    "Software Developer",
    "Full-Stack Engineer",
    "Problem Solver"
  ];

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Cinematic Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
      </div>

      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 20 }}
            className="w-5 h-5 rounded-full bg-accent shadow-[0_0_20px_rgba(145,94,255,0.8)]" 
          />
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "10rem" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-1 sm:h-80 h-40 violet-gradient shadow-[0_0_15px_rgba(128,77,238,0.3)]" 
          />
        </div>

        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${styles.heroHeadText} text-white tracking-tight`}
          >
            Hi, I'm <span className="text-accent drop-shadow-[0_0_15px_rgba(145,94,255,0.5)]">Mohammed</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`${styles.heroSubText} mt-4 text-white-100 max-w-2xl leading-relaxed`}
          >
            I'm a <TypewriterText texts={typedItems} />
            <br className="sm:block hidden" />
            Designing logic. Building solutions. Scaling applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex gap-5"
          >
            <a href="#projects" className="px-8 py-3 bg-accent text-white font-bold rounded-full shadow-premium hover:scale-105 transition-transform glass-morphism border-none text-center">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-accent/50 text-white font-bold rounded-full hover:bg-accent/10 transition-colors glass-morphism text-center">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2 glass-morphism">
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;