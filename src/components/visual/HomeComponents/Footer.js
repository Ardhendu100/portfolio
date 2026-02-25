import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GithubUrl, LinkedInUrl, TwitterUrl } from "../../../utils/urls";
import { Link } from "react-router-dom";

function Footer() {
  const socials = [
    { icon: <FaLinkedin size={18} />, url: LinkedInUrl, label: "LinkedIn" },
    { icon: <FaXTwitter size={18} />, url: TwitterUrl, label: "Twitter" },
    { icon: <FaGithub size={18} />, url: GithubUrl, label: "GitHub" },
  ];

  const links = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/project" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <span className="text-accent font-mono text-xl font-bold">&lt;A/&gt;</span>
            <p className="text-muted text-xs mt-1 font-mono tracking-wide">ARDHENDU SEKHAR SAHOO</p>
          </div>

          {/* Nav */}
          <div className="flex gap-6">
            {links.map((l, i) => (
              <Link key={i} to={l.url} className="text-muted hover:text-accent text-sm transition-colors">
                {l.name}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-4">
            {socials.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
                <div className="text-muted hover:text-accent transition-colors">
                  {s.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="accent-line mt-8 mb-6" />

        <div className="text-center text-muted text-xs font-mono">
          © {new Date().getFullYear()} Ardhendu Sekhar Sahoo · Designed & Built with React + Tailwind
        </div>
      </div>
    </footer>
  );
}

export default Footer;
