import React from "react";

function Experience() {
  const experience = [
    {
      name: "AlumNetworks Private Limited",
      designation: "Full Stack Developer",
      duration: "Jun 2023 - Present",
      responsiblities: [
        `Implemented a Ticketing system for a chatbot to handle customers
        coming in out-of-office hours, resulting in 34% more customer
        engagement.`,
        `Worked on integrating various third-party systems with chatbot
        such as CRM, RPA bots, SendGrid, Google Cloud Functions, and
        Storage.`,
        `Contributed majorly to Anomaly Detection, custom widgets,
        webform, and logging features.`,
        `Developed Custom Widgets for Agents`,
      ],
    },
    {
      name: "Hyscaler",
      designation: "Jr. Software Developer",
      duration: "Feb 2023 - May 2023",
      responsiblities: [
        `Got To learn about ERP systems`,
        `Worked on a Hospital Management ERP system using Odoo`,
      ],
    },
    {
      name: "Hyscaler",
      designation: "Jr. Technical Programmer",
      duration: "Jul 2022 - Jan 2023",
      responsiblities: [
        `Got To learn about ERP systems`,
        `Worked on a Hospital Management ERP system using Odoo`,
      ],
    },
    {
      name: "Hyscaler",
      designation: "Software Developer Trainee",
      duration: "Apr 2022 - Jun 2022",
      responsiblities: [
        `Got To learn about ERP systems`,
        `Worked on a Hospital Management ERP system using Odoo`,
      ],
    },
  ];
  return (
    <div className="md:px-72 px-5">
      <div className="flex justify-center mt-28 text-3xl md:text-4xl font-semibold mb-12 ">
        Work Experience
      </div>
      <div className="flex justify-center">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {experience.map((exp, i) => {
            return (
              <li className="mb-10 ml-4 " key={i}>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {exp.duration}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-black">
                  {exp.designation}
                </h3>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
                  {exp.name}
                </h3>
                {/* <ol className="list-disc text-black pl-2">
                  {exp.responsiblities.map((responsibility, j) => {
                    return <li key={j}>{responsibility}</li>;
                  })}
                </ol> */}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Experience;
