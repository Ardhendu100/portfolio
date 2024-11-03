import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
      className=" mt-5 md:mt-20">
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row lg:space-x-24 px-10">
        <div className="flex space-x-5 mt-10  lg:flex-col lg:space-y-10 lg:space-x-0 lg:mt-0">
          <a
            href="https://www.linkedin.com/in/ardhendu-sekhar-sahoo/"
            target="_blank"
            rel="noreferrer">
            <FaLinkedin
              size={30}
              className="hover:scale-125 duration-200 cursor-pointer"></FaLinkedin>
          </a>
          <a
            href="https://x.com/ardhendu_s51820"
            target="_blank"
            rel="noreferrer">
            <FaSquareXTwitter
              size={30}
              className="hover:scale-125 duration-200 cursor-pointer"></FaSquareXTwitter>
          </a>
          <a href="https://github.com/Ardhendu100" target="_blank" rel="noreferrer">
            <FaGithubSquare
              size={30}
              className="hover:scale-125 duration-200 cursor-pointer"></FaGithubSquare>
          </a>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="font-bold mb-3 text-2xl mt-2 md:text-5xl md:mt-0 ">
          Ardhendu Sekhar Sahoo👋
          </div>
          <div className="hidden md:flex md:items-center md:mb-3">
            <div className="w-16 bg-slate-700 h-0.5 mr-2"></div>
            <div className="text-lg">Developer</div>
          </div>
          <div className="px-5 pt-3 w-80  md:text-xl md:p-0 ">
            Hi, I'm a <b>Full Stack Developer</b> based in India with a passion for
            developing web apps.
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://drive.google.com/drive/folders/1ds1K2zPTSCE2Uc38B_b3pEWymaZyxLRG?usp=share_link"
              target="_blank"
              rel="noreferrer">
              <button
                className="flex items-center space-x-4 justify-center
            text-white bg-black mt-5 px-3 py-2 rounded-lg 
            hover:scale-105 duration-2000 
          hover:bg-white hover:text-black hover:border 
            border-2 border-black 
           md:mt-8">
                <div>Resume</div>
                <div>
                  <BsDownload></BsDownload>
                </div>
              </button>
            </a>
            <Link to="/contact">
              <button
                className="flex items-center space-x-4 justify-center
              text-white bg-black mt-5 px-3 py-2 rounded-lg hover:scale-105 duration-2000 border-2 border-black hover:bg-white hover:text-black hover:border 
              md:mt-8">
                <div>Say Hi !</div>
                <div>
                  <RiSendPlaneFill></RiSendPlaneFill>
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="">
          <img
            className="animate-porfile_animate shadow-gray-500 shadow-lg h-52 md:h-80 w-fit "
            src="assets/profile_image.webp"
            alt="profileImage"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
