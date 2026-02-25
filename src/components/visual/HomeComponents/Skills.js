import { motion } from "framer-motion";
import React from "react";
import {
  SiJavascript, SiReact, SiPython, SiMysql, SiPostgresql,
  SiDjango, SiPhp, SiLaravel, SiTailwindcss, SiGit,
  SiDocker, SiOpenai, SiFastapi, SiRedis, SiTypescript,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";

const skillGroups = [
  {
    label: "AI / GenAI",
    color: "#00d4ff",
    skills: [
      { name: "OpenAI / GPT", icon: <SiOpenai /> },
      { name: "LLM Integration", icon: <FaBrain /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Python", icon: <SiPython /> },
    ],
  },
  {
    label: "Frontend",
    color: "#a78bfa",
    skills: [
      { name: "React JS", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    label: "Backend",
    color: "#34d399",
    skills: [
      { name: "Django", icon: <SiDjango /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    label: "Database & DevOps",
    color: "#f59e0b",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Git", icon: <SiGit /> },
    ],
  },
];

function Skills() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16">
        <span className="text-accent font-mono text-sm tracking-[0.2em] uppercase">02. Skills</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Tech Stack</h2>
        <div className="accent-line w-24 mt-4" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={gi}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className="card-dark p-6 hover:glow-border transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-1 h-5 rounded-full"
                style={{ backgroundColor: group.color }}
              />
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: group.color }}>
                {group.label}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {group.skills.map((skill, si) => (
                <motion.div
                  key={si}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-default">
                  <span className="text-lg" style={{ color: group.color }}>
                    {skill.icon}
                  </span>
                  <span className="text-subtle text-sm font-medium group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
