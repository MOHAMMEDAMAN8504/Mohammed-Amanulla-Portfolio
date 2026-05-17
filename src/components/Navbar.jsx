import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-morphism-premium py-2" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-10 h-10 flex items-center justify-center glass-morphism rounded-xl border border-white/10"
          >
            <img src={logo} alt='logo' className='w-6 h-6 object-contain' />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='flex flex-col'
          >
            <span className='text-white text-[18px] font-bold tracking-widest uppercase leading-tight'>
              Mohammed <span className="text-accent">Amanulla</span>
            </span>
            <span className="text-[10px] text-secondary uppercase tracking-[0.2em]">Portfolio 2026</span>
          </motion.div>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-8 items-center'>
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <a
                href={`#${nav.id}`}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[14px] font-bold uppercase tracking-widest cursor-pointer transition-all duration-300`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </a>
              {active === nav.title && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#contact">
              <button className="px-5 py-2 glass-morphism border border-accent/30 text-accent font-bold uppercase text-[12px] tracking-widest rounded-lg hover:bg-accent hover:text-white transition-all duration-300">
                Let's Talk
              </button>
            </a>
          </motion.li>
        </ul>

        {/* Mobile Menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div 
            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer glass-morphism rounded-lg border border-white/10"
            onClick={() => setToggle(!toggle)}
          >
            <motion.span 
              animate={{ rotate: toggle ? 45 : 0, y: toggle ? 4 : 0 }}
              className="w-5 h-[2px] bg-white rounded-full transition-all"
            />
            <motion.span 
              animate={{ opacity: toggle ? 0 : 1 }}
              className="w-5 h-[2px] bg-white rounded-full transition-all"
            />
            <motion.span 
              animate={{ rotate: toggle ? -45 : 0, y: toggle ? -4 : 0 }}
              className="w-5 h-[2px] bg-white rounded-full transition-all"
            />
          </div>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 w-[70%] h-screen glass-morphism-premium p-10 flex flex-col items-center justify-center gap-8 shadow-2xl z-40"
              >
                <div 
                  className="absolute top-6 right-6 text-white text-2xl"
                  onClick={() => setToggle(false)}
                >
                  ✕
                </div>
                {navLinks.map((nav, index) => (
                  <motion.a
                    key={nav.id}
                    href={`#${nav.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${
                      active === nav.title ? "text-white" : "text-secondary"
                    } text-2xl font-bold uppercase tracking-widest`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    {nav.title}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
