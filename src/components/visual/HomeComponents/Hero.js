import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsDownload, BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const roles = [
  "Full Stack Developer",
  "AI / GenAI Engineer",
  "LLM Applications Developer",
];

function TypingText() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, 70);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, 35);
    } else {
      setDeleting(false);
      setRoleIdx((r) => (r + 1) % roles.length);
      setCharIdx(0);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <span className="text-accent font-mono">
      {displayed}
      <span className="animate-blink">|</span>
    </span>
  );
}

const socialLinks = [
  { icon: <FaLinkedin size={18} />, url: "https://www.linkedin.com/in/ardhendu-sekhar-sahoo/", label: "LinkedIn" },
  { icon: <FaXTwitter size={18} />, url: "https://x.com/ardhendu_s51820", label: "Twitter" },
  { icon: <FaGithub size={18} />, url: "https://github.com/Ardhendu100", label: "GitHub" },
];

function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center grid-bg pt-16">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent opacity-[0.04] blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left — Text */}
          <div className="flex-1 max-w-2xl">
            <motion.div variants={item} className="mb-4">
              <span className="text-accent font-mono text-sm tracking-[0.2em] uppercase">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-4">
              <span className="text-gradient">Ardhendu</span>
              <br />
              <span className="text-white">Sekhar Sahoo</span>
            </motion.h1>

            <motion.div variants={item} className="text-xl md:text-2xl font-medium text-subtle mb-6 h-8">
              <TypingText />
            </motion.div>

            <motion.p
              variants={item}
              className="text-subtle leading-relaxed max-w-lg mb-8 text-base md:text-lg">
              Building intelligent systems and scalable web applications.
              Focused on <span className="text-white font-medium">AI/GenAI</span>,{" "}
              <span className="text-white font-medium">LLM integrations</span>, and{" "}
              <span className="text-white font-medium">full-stack development</span>.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a href="assets/ardhendu.pdf" target="_blank" rel="noreferrer">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 0 20px #00d4ff33" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-3 bg-accent text-bg font-semibold text-sm rounded-lg transition-all">
                  <BsDownload size={15} />
                  Download CV
                </motion.button>
              </a>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-3 border border-border text-white font-semibold text-sm rounded-lg hover:border-accent hover:text-accent transition-all">
                  Let's Talk
                  <BsArrowRight size={15} />
                </motion.button>
              </Link>
            </motion.div>

            {/* Social */}
            <motion.div variants={item} className="flex items-center gap-4 mt-8">
              <div className="h-px w-8 bg-border" />
              {socialLinks.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <motion.div
                    whileHover={{ y: -2, color: "#00d4ff" }}
                    className="text-muted hover:text-accent transition-colors">
                    {s.icon}
                  </motion.div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile visual */}
          <motion.div
            variants={item}
            className="relative flex-shrink-0">
            <motion.div
              animate={{ borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 60% 70% 40%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-56 h-56 md:w-72 md:h-72 overflow-hidden border-2 border-accent/30 animate-glow-pulse">
              <img
                src="assets/me2.jpg"
                alt="Ardhendu"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Decorative rings */}
            <div className="absolute -inset-4 border border-accent/10 rounded-full pointer-events-none" />
            <div className="absolute -inset-8 border border-accent/5 rounded-full pointer-events-none" />
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-surface border border-border rounded-full px-4 py-1.5 flex items-center gap-2 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-subtle font-medium">Available for work</span>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
