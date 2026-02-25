import React from "react";
import { motion } from "framer-motion";
import { HiOutlineBriefcase } from "react-icons/hi";

function Experience() {
  const experience = [
    {
      company: "AlumNetworks Private Limited",
      role: "Full Stack Developer",
      duration: "Jun 2023 – Present",
      type: "Full-time",
      highlights: [
        "Built a Ticketing system for a chatbot handling out-of-office hours — 34% more customer engagement.",
        "Integrated third-party systems: CRM, RPA bots, SendGrid, Google Cloud Functions & Storage.",
        "Contributed to Anomaly Detection, custom widgets, webform, and logging features.",
        "Developed custom widgets for support agents.",
      ],
    },
    {
      company: "Hyscaler",
      role: "Jr. Software Developer",
      duration: "Feb 2023 – May 2023",
      type: "Full-time",
      highlights: [
        "Worked on a Hospital Management ERP system using Odoo.",
        "Gained deep understanding of ERP architecture and workflows.",
      ],
    },
    {
      company: "Hyscaler",
      role: "Jr. Technical Programmer",
      duration: "Jul 2022 – Jan 2023",
      type: "Full-time",
      highlights: [
        "Developed modules for Hospital Management ERP using Odoo.",
      ],
    },
    {
      company: "Hyscaler",
      role: "Software Developer Trainee",
      duration: "Apr 2022 – Jun 2022",
      type: "Internship",
      highlights: [
        "Onboarded to ERP systems and contributed to initial development tasks.",
      ],
    },
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16">
        <span className="text-accent font-mono text-sm tracking-[0.2em] uppercase">04. Career</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Experience</h2>
        <div className="accent-line w-24 mt-4" />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="flex flex-col gap-10">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="pl-14 md:pl-20 relative">
              {/* Dot */}
              <div className="absolute left-[9px] md:left-[17px] top-2 w-3 h-3 rounded-full border-2 border-accent bg-bg" />

              <div className="card-dark p-5 md:p-6 hover:glow-border transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <HiOutlineBriefcase className="text-accent" size={16} />
                      <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                    </div>
                    <p className="text-accent text-sm font-medium mt-0.5">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs font-mono text-muted">{exp.duration}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted font-medium uppercase">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-subtle text-sm leading-relaxed">
                      <span className="text-accent mt-1.5 flex-shrink-0 text-xs">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
