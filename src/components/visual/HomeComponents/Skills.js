import { motion } from "framer-motion";
import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiNestjs,
  SiReact,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiSwagger,
  SiPostgresql,
  SiLivewire,
  SiLaravel,
  SiDjango,
  SiDavinciresolve,
  SiEclipseadoptium,
  SiPhp
} from "react-icons/si";

function Skills() {
  const languages = [
    {
      name: "Python",
      logo: <SiPython></SiPython>,
    },
    {
      name: "Php",
      logo: <SiPhp></SiPhp>,
    },
    {
      name: "Javascript",
      logo: <SiJavascript></SiJavascript>,
    }
  ];

  const frameworks = [
    {
      name: "Laravel",
      logo: <SiLaravel></SiLaravel>,
    },
    {
      name: "Livewire",
      logo: <SiLivewire></SiLivewire>,
    },
    {
      name: "Django",
      logo: <SiDjango></SiDjango>,
    },
    {
      name: "React JS",
      logo: <SiReact></SiReact>,
    },
  ];

  const databases = [
    {
      name: "MySql",
      logo: <SiMysql></SiMysql>,
    },
    {
      name: "PostgreSql",
      logo: <SiPostgresql></SiPostgresql>,
    },
  ];
  const softskills = [
    
    {
      name: "Problem-Solving",
      logo: <SiDavinciresolve></SiDavinciresolve>,
    },
    {
      name: "Adaptability",
      logo: <SiEclipseadoptium></SiEclipseadoptium>,
    },
  ];
  return (
    <div className="mt-20 md:mt-36">
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-semibold mb-10">Skills</div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="flex space-x-20 md:space-x-48">
          <div>
            <div className="text-xl font-medium mb-5">Languages</div>
            {languages.map((language, i) => {
              return (
                <div
                  key={i}
                  className="flex space-x-2 mb-2 items-center md:text-xl cursor-pointer hover:scale-105 duration-150">
                  {language.logo}
                  <div>{language.name}</div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="text-xl font-medium mb-5">Framworks & Library</div>
            {frameworks.map((framework, i) => {
              return (
                <div
                  key={i}
                  className="flex space-x-2 mb-2 items-center md:text-xl cursor-pointer hover:scale-105 duration-150">
                  {framework.logo}
                  <div>{framework.name}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
        <div className="flex space-x-20 mt-10 md:space-x-48">
          <div>
            <div className="text-xl font-medium mb-5">Databases</div>
            {databases.map((database, i) => {
              return (
                <div
                  key={i}
                  className="flex space-x-2 mb-2 items-center md:text-xl cursor-pointer hover:scale-105 duration-150">
                  {database.logo}
                  <div>{database.name}</div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="text-xl font-medium mb-5">Soft skills</div>
            {softskills.map((database, i) => {
              return (
                <div
                  key={i}
                  className="flex space-x-2 mb-2 items-center md:text-xl cursor-pointer hover:scale-105 duration-150">
                  {database.logo}
                  <div>{database.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
