"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { resume, profilepic } from "../assets"

const About = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("show")
    }
  }, [isInView, mainControls])

  return (
    <div ref={sectionRef} className="pt-[60px] md:pt-0 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-12">
        <motion.div
          variants={fadeIn("right", "spring", 0.3, 1)}
          initial="hidden"
          animate={mainControls}
          className="w-full md:w-1/3 flex flex-col items-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-accent/20 glass-morphism p-1">
              <img
                src={profilepic || "/placeholder.svg"}
                alt="Mohammed Amanulla"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            {[
              { label: "Resume", link: resume, color: "from-accent/20 to-accent/10" },
              { label: "LinkedIn", link: "https://www.linkedin.com/in/-amanshaik", color: "from-blue-500/20 to-blue-600/10" },
              { label: "GitHub", link: "https://github.com/MOHAMMEDAMAN8504", color: "from-gray-600/20 to-gray-800/10" }
            ].map((btn, i) => (
              <motion.button
                key={i}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(btn.link, "_blank")}
                className={`px-6 py-3 font-semibold text-white glass-morphism rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300 shadow-premium`}
              >
                {btn.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={fadeIn("left", "spring", 0.5, 1)}
          initial="hidden"
          animate={mainControls}
          className="w-full md:w-2/3 glass-morphism-premium p-8 rounded-3xl border border-white/5"
        >
          <ul className="space-y-8">
            {[
              { icon: "💻", text: "Computer Science Engineering graduate specializing in Data Science, passionate about building practical and intelligent software solutions." },
              { icon: "🎓", text: "Focused on software development, AI-powered applications, and full-stack technologies, with a strong interest in creating impactful digital products." },
              { icon: "🛠", text: "Developed impactful projects including HireBridge – a Job Portal System, Ash – a Personalized AI Desktop Assistant, and a 3D Rubik’s Cube Solver with interactive visualization." },
              { icon: "🔧", text: "Skilled in Java, SQL, HTML, CSS, JavaScript, and modern web technologies, with hands-on experience in backend development, database management, and responsive UI design." },
              { icon: "💡", text: "Driven by curiosity and continuous learning, always exploring new technologies and innovative ideas to build scalable and user-focused applications." }
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-start group"
              >
                <span className="mr-5 text-3xl group-hover:scale-120 transition-transform duration-300">{item.icon}</span>
                <span className="text-secondary text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  {item.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(About, "about")
