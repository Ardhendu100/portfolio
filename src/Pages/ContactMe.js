import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/visual/ContactComponents/ContactForm";
import Footer from "../components/visual/HomeComponents/Footer";
import Navbar from "../components/visual/HomeComponents/Navbar";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LinkedInUrl, GithubUrl, TwitterUrl } from "../utils/urls";

function ContactMe() {
  const contacts = [
    { icon: <FaLinkedin size={20} />, label: "LinkedIn", url: LinkedInUrl, handle: "ardhendu-sekhar-sahoo" },
    { icon: <FaXTwitter size={20} />, label: "Twitter / X", url: TwitterUrl, handle: "@ardhendu_s51820" },
    { icon: <FaGithub size={20} />, label: "GitHub", url: GithubUrl, handle: "Ardhendu100" },
  ];

  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <div className="pt-24 max-w-6xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12">
          <span className="text-accent font-mono text-sm tracking-[0.2em] uppercase">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">Contact Me</h1>
          <div className="accent-line w-24 mt-4" />
          <p className="text-subtle mt-4 max-w-lg text-sm md:text-base leading-relaxed">
            Open to AI/GenAI roles, full-stack opportunities, and freelance projects. Drop me a message and I'll reply within 24 hours.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form */}
          <div className="flex-1">
            <ContactForm />
          </div>

          {/* Side info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-72 flex flex-col gap-4">
            {contacts.map((c, i) => (
              <a key={i} href={c.url} target="_blank" rel="noreferrer">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="card-dark p-4 flex items-center gap-4 hover:glow-border transition-all duration-300">
                  <div className="text-accent">{c.icon}</div>
                  <div>
                    <div className="text-xs text-muted uppercase tracking-wider font-medium">{c.label}</div>
                    <div className="text-white text-sm font-medium">{c.handle}</div>
                  </div>
                </motion.div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactMe;
