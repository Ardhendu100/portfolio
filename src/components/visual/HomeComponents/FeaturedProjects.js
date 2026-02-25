import React from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";

const featured = [
  {
    number: "01",
    name: "ZipDJ",
    tagline: "Premium DJ Pool Platform",
    desc: "A DJ pool for USA and Canada with top music, advanced search, subscription plans, and a high-quality download library.",
    tags: ["Laravel", "PHP", "MySQL", "Livewire"],
    liveUrl: "https://www.zipdj.com",
    thumbnail: "assets/projects/zipdj.jpeg",
  },
  {
    number: "02",
    name: "Proxtal",
    tagline: "Professional Hiring Platform",
    desc: "A platform bridging job seekers and employers with advanced filtering, streamlined hiring, and user-friendly job postings.",
    tags: ["React", "Django", "PostgreSQL"],
    liveUrl: "https://proxtal.com/",
    thumbnail: "assets/projects/proxtal.png",
  },
  {
    number: "03",
    name: "Aviva Health",
    tagline: "Life Insurance Suite",
    desc: "A scalable life insurance application that simplifies agent management, policy underwriting, and client onboarding.",
    tags: ["Laravel", "PHP", "MySQL"],
    liveUrl: "https://aviva.health/",
    thumbnail: "assets/projects/aviva_health.png",
  },
];

function FeaturedProjects() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16">
        <span className="text-accent font-mono text-sm tracking-[0.2em] uppercase">03. Work</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Featured Projects</h2>
        <div className="accent-line w-24 mt-4" />
      </motion.div>

      <div className="flex flex-col gap-20">
        {featured.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>

            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full md:w-1/2 rounded-xl overflow-hidden border border-border group">
              <img
                src={proj.thumbnail}
                alt={proj.name}
                className="w-full h-56 md:h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-accent/10 group-hover:opacity-0 transition-opacity duration-500" />
            </motion.div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <div className="font-mono text-accent text-sm mb-2">{proj.number}.</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{proj.name}</h3>
              <p className="text-accent text-sm font-medium mb-4">{proj.tagline}</p>
              <p className="text-subtle leading-relaxed mb-5 text-sm md:text-base">{proj.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tags.map((tag, ti) => (
                  <span
                    key={ti}
                    className="px-3 py-1 text-xs font-mono text-accent bg-accent-dim border border-accent/20 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a href={proj.liveUrl} target="_blank" rel="noreferrer">
                <motion.button
                  whileHover={{ scale: 1.03, x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4">
                  <HiExternalLink size={16} />
                  View Live Site
                </motion.button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View all */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center mt-16">
        <Link to="/project">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 border border-border text-subtle hover:border-accent hover:text-accent text-sm font-medium rounded-lg transition-all">
            View All Projects
            <AiOutlineArrowRight size={15} />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

export default FeaturedProjects;
