const helpData = [
  {
    command: "cd",
    description: "change current working directory",
  },
  {
    command: "ls",
    description: "list of available commands",
  },
  {
    command: "run",
    description: "run a .md file ex: run about.md",
  },
  {
    command: "exit",
    description: "exit the terminal go back to normal mode",
  },
  {
    command: "clear",
    description: "clear the terminal console",
  },
  {
    command: "help",
    description: "to see the lsit of available commands",
  },
];

const lsHome = [
  {
    type: "file",
    name: "about.md",
  },
  {
    type: "file",
    name: "achivements.md",
  },
  {
    type: "file",
    name: "contact.md",
  },
  {
    type: "file",
    name: "education.md",
  },
  {
    type: "file",
    name: "experience.md",
  },
  {
    type: "folder",
    name: "projects/",
  },
  {
    type: "file",
    name: "skills.md",
  },
];

const lsProjects = [
  "allProjects.md",
  "project1.md",
  "project2.md",
  "project3.md",
];

const aboutData = `Experienced software engineer with a passion for developing
innovative programs that expedite the efficiency and effectiveness
of organizational success. Well-versed in technology and writing
code to create systems that are reliable and user-friendly.
Skilled leader who has the proven ability to motivate, educate,
and manage a team of professionals to build software programs and
effectively track changes. Confident communicator, strategic
thinker, and innovative creator to develop software that is
customized to meet a company’s organizational needs, highlight
their core competencies, and further their success`;

const logoData = [
  " $$$$$$\\                                                 $$\\",
  "$$  __$$\\                                                $$ |",
  "$$ /  \\__|$$\\   $$\\ $$\\    $$\\  $$$$$$\\  $$$$$$$\\   $$$$$$$ |$$\\   $$\\",
  "\\$$$$$$\\  $$ |  $$ |\\$$\\  $$  |$$  __$$\\ $$  __$$\\ $$  __$$ |$$ |  $$ |",
  " \\____$$\\ $$ |  $$ | \\$$\\$$  / $$$$$$$$ |$$ |  $$ |$$ /  $$ |$$ |  $$ |",
  "$$\\   $$ |$$ |  $$ |  \\$$$  /  $$   ____|$$ |  $$ |$$ |  $$ |$$ |  $$ |",
  "\\$$$$$$  |\\$$$$$$  |   \\$  /   \\$$$$$$$\\ $$ |  $$ |\\$$$$$$$ |\\$$$$$$  |",
  " \\______/  \\______/     \\_/     \\_______|\\__|  \\__| \\_______| \\______/",
];

module.exports = {
  helpData,
  lsHome,
  lsProjects,
  aboutData,
  logoData,
};
