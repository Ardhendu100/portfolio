import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menu, setmenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/project" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2">
            <span className="text-accent font-mono text-lg font-bold tracking-widest">
              &lt;A/&gt;
            </span>
            <span className="text-white font-semibold text-sm tracking-wider hidden sm:block">
              ARDHENDU
            </span>
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center space-x-1">
          {navItems.map((item, i) => {
            const isActive = location.pathname === item.url;
            return (
              <Link to={item.url} key={i}>
                <motion.li
                  whileHover={{ y: -1 }}
                  className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-md ${
                    isActive
                      ? "text-accent"
                      : "text-subtle hover:text-white"
                  }`}>
                  {isActive && (
                    <span className="text-accent mr-1 font-mono">›</span>
                  )}
                  {item.name}
                </motion.li>
              </Link>
            );
          })}
          <a
            href="assets/ardhendu.pdf"
            target="_blank"
            rel="noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-4 py-1.5 text-sm font-medium text-accent border border-accent rounded-md hover:bg-accent-dim transition-all duration-200">
              Resume
            </motion.button>
          </a>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-subtle hover:text-white transition-colors"
          onClick={() => setmenu(!menu)}>
          {menu ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden">
            <ul className="flex flex-col px-6 py-4 space-y-1">
              {navItems.map((item, i) => (
                <Link to={item.url} key={i} onClick={() => setmenu(false)}>
                  <li className="py-3 text-subtle hover:text-white font-medium tracking-wide border-b border-border last:border-0 transition-colors">
                    <span className="text-accent font-mono mr-2">0{i + 1}.</span>
                    {item.name}
                  </li>
                </Link>
              ))}
              <a
                href="assets/ardhendu.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setmenu(false)}>
                <li className="py-3 text-accent font-medium tracking-wide">
                  Resume ↗
                </li>
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
