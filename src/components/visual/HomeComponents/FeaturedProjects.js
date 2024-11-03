import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function FeaturedProjects() {
  const proj1Feat = [
    "Authentication",
    "Authorization",
    "Membership and Subscription Plans",
    "Extensive Music Library",
    "Advanced Search and Filtering",
    "High-Quality Downloads",
    "Analytics and Reporting",
    "Mobile-Responsive Design",
  ];
  const proj2Feat = [
    "Authentication",
    "Authorization",
    "User-Friendly Platform",
    "Job and Project Posting",
    "Advanced Search and Filtering",
    "Streamlined Hiring",
  ];
  return (
    <div className="mt-20 md:mt-36 ">
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-semibold mb-16 md:mb-28">
          Featured Projects
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-20 md:mb-32  mb-16">
        <div className="md:w-[500px] w-[300px]">
          <img src="assets/projects/zipdj.jpeg" alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-xl md:text-3xl md:mb-10 mb-5 md:mt-0 mt-5">
            ZipDj
          </div>
          <div className="grid grid-cols-2 gap-2 ml-5 lg:ml-0">
            {proj1Feat.map((e) => {
              return (
                <div className="flex items-center space-x-1" key={e}>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-green-500 w-4 h-4  md:w-6 md:h-6 flex-shrink-0"
                    viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <div>{e}</div>
                </div>
              );
            })}
          </div>
          <div
            className="
          flex md:space-x-5 space-x-3">
            <button
              className="text-white bg-black mt-5 px-3 py-2 rounded-lg md:w-44 w-28
            hover:scale-105 duration-2000 
          hover:bg-white hover:text-black hover:border 
            border-2 border-black" onClick={() => window.open("https://www.zipdj.com", "_blank")}>
              Live
            </button>
            
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center md:space-x-20 mb-16">
        <div className="flex flex-col justify-center">
          <div className="text-xl md:text-3xl md:mb-10 mb-5 md:mt-0 mt-5 ml-5 lg:ml-0">
          Proxtal
          </div>
          <div className="grid grid-cols-2 gap-2 ml-5 lg:ml-0">
            {proj2Feat.map((e) => {
              return (
                <div className="flex items-center space-x-1" key={e}>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-green-500 w-4 h-4  md:w-6 md:h-6 flex-shrink-0"
                    viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <div>{e}</div>
                </div>
              );
            })}
          </div>
          <div
            className="
          flex md:space-x-5 space-x-3">
            <button
              className="text-white bg-black mt-5 px-3 py-2 rounded-lg md:w-44 w-28
            hover:scale-105 duration-2000 
          hover:bg-white hover:text-black hover:border 
            border-2 border-black" onClick={() => window.open("https://www.proxtal.com", "_blank")}>
              Live
            </button>
            
          </div>
        </div>
        <div className="md:w-[500px] w-[300px]">
        <img src="assets/projects/proxtal.png" alt="" />
          
        </div>
      </div>
    
      <div className="mt-16 flex justify-center">
        <Link to="/project">
          <button
            className="text-white bg-black mt-5 px-3 py-2 rounded-lg w-64
          hover:scale-105 duration-2000 
          hover:bg-white hover:text-black hover:border 
          border-2 border-black flex  justify-center items-center space-x-2">
            <div>View all Projects</div>
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedProjects;
