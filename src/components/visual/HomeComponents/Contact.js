import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function Contact() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl border border-border bg-surface overflow-hidden p-10 md:p-16 text-center">

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent opacity-[0.05] blur-3xl" />
        </div>

        <span className="text-accent font-mono text-sm tracking-[0.2em] uppercase">05. Contact</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white mt-3 mb-4">
          Let's Build Something <br />
          <span className="text-gradient">Together</span>
        </h2>
        <p className="text-subtle text-base md:text-lg max-w-md mx-auto mb-10">
          Open to AI/GenAI roles, software development opportunities, and freelance projects. Let's talk.
        </p>

        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00d4ff44" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-bg font-bold text-sm rounded-lg">
            Get In Touch
            <BsArrowRight size={16} />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

export default Contact;
