import React from "react";
import { AllProjectsData } from "../../../utils/AllProjectsData";

function AllProjectCards() {
  return (
    <div className="mt-16">
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 gap-y-7 gap-x-8 sm:grid-cols-1 md:grid-cols-2 mx-10">
          {AllProjectsData.map((project, i) => {
            return (
              <div
                className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-2xl"
                key={i}>
                {project.video === 'no' ?
                  <div className="">
                  <img src={project.thumbnail} alt="" />
                </div>
                :
                <video src={project.thumbnail} autoPlay loop muted></video>
                }
                <div className="pt-2 pb-10">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 text-center px-2">
                    {project.name}
                  </h5>
                  <div className="text-center px-2 mt-2">{project.desc}</div>
                  <div className="text-white space-x-5 text-center mt-3">
                    
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <button
                        className="text-white bg-black py-1 rounded-lg  w-32 text-xl hover:text-black hover:bg-transparent
                      border border-black">
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllProjectCards;
