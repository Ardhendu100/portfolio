import React from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";

const featured = [
  
  {
    number: "01",
    name: "AwareNow",
    tagline: "AI-Powered City Council & School Board Meeting Summaries",
    desc: "Developed an AI-powered civic intelligence platform that transforms complex local government meeting transcripts into concise, searchable summaries using OpenAI APIs. Architected a scalable backend with Django, PostgreSQL, and Celery for asynchronous processing of long-form content. Focused on performance optimization, modular design, and reliable AI task execution..",
    tags: ["Django", "OpenAI", "Redis", "Celery", "React", "PostgreSQL"],
    liveUrl: "https://www.awarenow.ai/",
    thumbnail: "assets/projects/awarenow.png",
  },
  {
    number: "02",
    name: "Namaste Westside",
    tagline: "AI-Enabled Travel Itinerary & Event Management Platform",
    desc: "Built an AI-powered travel engine using Dialogflow CX for multi-turn conversations and contextual intent handling. Generated dynamic, personalized itineraries through backend fulfillment services and scalable REST APIs with an optimized React frontend.",
    tags: ["Django", "React Js", "Dialogflow CX", "OpenAI", "PostgreSQL"],
    liveUrl: "http://20.197.2.65:8181/",
    thumbnail: "assets/projects/namaste.png",
  },
  {
    number: "03",
    name: "Atompass",
    tagline: "Your Digital Life Secured Forever",
    desc: "Led the development of Atompass, a secure password manager designed with a security-first architecture. Implemented encrypted credential storage and robust authentication mechanisms to ensure user data protection. Owned the project end-to-end from concept to deployment.",
    tags: ["Node.js", "Express", "PostgreSQL", "React"],
    liveUrl: "https://atompass.com/",
    thumbnail: "assets/projects/atompass.png",
  },
  {
    number: "04",
    name: "Proxtal",
    tagline: "A user-friendly platform connecting international development professionals with impactful projects worldwide.",
    desc: "Led AI-driven content generation and an intelligent support chatbot to enhance user workflows on a production-grade hiring and collaboration platform for the infrastructure sector. Integrated a professional social networking module, real-time messaging, and event-driven notifications on a scalable, secure, role-based architecture.",
    tags: ["Laravel", "React", "Mysql", "Tailwind CSS"],
    liveUrl: "https://proxtal.com/",
    thumbnail: "assets/projects/proxtal.png",
  },

  {
    number: "05",
    name: "RoleMatch",
    tagline: "AI-Powered Job Matching Platform",
    desc: "Built a production-ready personalized AI job matching platform leveraging semantic search and intelligent resume-to-role scoring. Automated multi-source job aggregation to deliver real-time, personalized recommendations.",
    tags: ["FastAPI", "Streamlit", "LangGraph", "Docker", "Supabase"],
    liveUrl: "https://role-match.streamlit.app",
    thumbnail: "assets/projects/role_match.png",
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
