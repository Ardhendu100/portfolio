import React from "react";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { AllProjectsData } from "../../../utils/AllProjectsData";

function AllProjectCards() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12">
        <span className="text-accent font-mono text-sm tracking-[0.2em] uppercase">All Work</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">Projects</h1>
        <div className="accent-line w-24 mt-4" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AllProjectsData.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -4 }}
            className="card-dark overflow-hidden group hover:glow-border transition-all duration-300 flex flex-col">

            {/* Thumbnail */}
            <div className="relative overflow-hidden h-44 bg-bg">
              {project.video === "no" ? (
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              ) : (
                <video
                  src={project.thumbnail}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-white font-bold text-lg mb-1">{project.name}</h3>
              <p className="text-subtle text-sm leading-relaxed flex-1">{project.desc}</p>

              {/* Tags */}
              {project.techStack && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.techStack.map((t, ti) => (
                    <span
                      key={ti}
                      className="text-[10px] px-2 py-0.5 rounded-full font-mono text-accent bg-accent-dim border border-accent/20">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA */}
              <div className="mt-4 pt-4 border-t border-border">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <motion.span
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-1.5 text-accent text-xs font-semibold">
                    <HiExternalLink size={14} />
                    View Live
                  </motion.span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default AllProjectCards;
