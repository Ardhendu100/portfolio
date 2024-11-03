import React, { useEffect, useRef, useState } from "react";
import {
  aboutData,
  helpData,
  lsHome,
  lsProjects,
} from "../../utils/terminalData/data";
import Header from "./Header";

function Screen() {
  const [terminalHistory, setterminalHistory] = useState(
    React.createElement("div", { children: [] })
  );
  const [cwd, setcwd] = useState("");

  const commandLine = useRef();

  function handleTerminalHistory(components) {
    let temp = React.createElement("div", {
      children: [...terminalHistory.props.children, components],
    });
    setterminalHistory(temp);
  }

  function addCommandLine(command, children) {
    return React.createElement("div", {
      className: "mb-4",
      children: [
        <div className="text-white mb-4">{`guest@hapi.com : ${cwd} $ ${command}`}</div>,
        children,
      ],
    });
  }

  function formatHelpData() {
    let commandComponents = helpData.map((data, i) => {
      return (
        <div key={i} className="text-green-500">
          {data.command}
        </div>
      );
    });
    const commandDiv = React.createElement("div", {
      className: "",
      children: commandComponents,
    });

    let descriptionComponent = helpData.map((data, i) => {
      return (
        <div key={i} className="text-white">
          {data.description}
        </div>
      );
    });

    const descriptionDiv = React.createElement("div", {
      className: "ml-5",
      children: descriptionComponent,
    });

    const helpDataDiv = React.createElement("div", {
      className: "flex justify-start",
      children: [commandDiv, descriptionDiv],
    });

    handleTerminalHistory(addCommandLine("help", helpDataDiv));
  }

  function handlels() {
    let lscomponents = [];
    if (cwd === "") {
      for (let i = 0; i < lsHome.length; i++) {
        if (lsHome[i].type === "file") {
          lscomponents.push(
            <div className="text-green-500">{lsHome[i].name}</div>
          );
        } else if (lsHome[i].type === "folder") {
          lscomponents.push(
            <div className="text-blue-800">{lsHome[i].name}</div>
          );
        }
      }
    } else if (cwd === "projects/") {
      lscomponents = lsProjects.map((project) => {
        return <div className="text-green-500">{project}</div>;
      });
    }
    let lsDiv = React.createElement("div", {
      className: "grid grid-cols-4 w-3/5",
      children: lscomponents,
    });
    handleTerminalHistory(addCommandLine("ls", lsDiv));
  }

  function changeCwd(dir, command) {
    handleTerminalHistory(
      <div className="text-white">{`guest@hapi.com : ${cwd} $ ${command}`}</div>
    );
    setcwd(dir);
  }

  function clearTerminal() {
    setterminalHistory(React.createElement("div", { children: [] }));
  }

  function handleAbout() {
    const ptag = React.createElement("p", {
      className: "text-white w-3/5",
      children: aboutData,
    });

    handleTerminalHistory(
      addCommandLine(
        "run about.md",
        React.createElement("div", {
          children: ptag,
        })
      )
    );
  }

  function handleCommandResponse(command) {
    if (command === "help") {
      formatHelpData();
    } else if (command === "ls") {
      handlels();
    } else if (command.includes("cd")) {
      let fileName = command.trim().split(" ")[1];
      if (fileName === "projects" || fileName === "projects/")
        changeCwd("projects/", "cd projects/");
      else if (fileName === "~") changeCwd("", "cd ~");
      else if (fileName === "../") changeCwd("", "cd ../");
      else {
        handleTerminalHistory(
          addCommandLine(
            command,
            <div>{command}: No such file or directory</div>
          )
        );
      }
    } else if (command === "clear") {
      clearTerminal();
    } else if (command.includes("run")) {
      let fileName = command.trim().split(" ")[1];
      if (cwd === "" && fileName === "about.md") handleAbout();
      else if (cwd === "" && fileName === "achivements.md") handleAbout();
      else if (cwd === "" && fileName === "contact.md") handleAbout();
      else if (cwd === "" && fileName === "education.md") handleAbout();
      else if (cwd === "" && fileName === "experience.md") handleAbout();
      else if (cwd === "" && fileName === "skills.md") handleAbout();
      else {
        handleTerminalHistory(
          addCommandLine(
            command,
            <div>{command}: No such file or directory</div>
          )
        );
      }
    } else {
      handleTerminalHistory(
        addCommandLine(
          command,
          <div>
            {command}: command Not found. Use help to see the list of available
            commands
          </div>
        )
      );
    }
  }
  function handleKeyUp(e) {
    if (e.key === "Enter") {
      handleCommandResponse(e.target.value);
      e.target.value = "";
    }
  }

  useEffect(() => {
    commandLine.current.scrollIntoView();
  });

  return (
    <>
      <div className="flex justify-between">
        <div className="bg-slate-800 h-screen w-screen pl-4 pb-20 overflow-auto">
          <Header></Header>
          <div className="mt-5"></div>
          <div className="text-white" id="history">
            {terminalHistory}
          </div>
          <div className="flex justify-start">
            <div
              ref={commandLine}
              className="text-white">{`guest@hapi.com : ${cwd} $`}</div>
            <input
              className="pl-2 bg-slate-800 border-none w-3/5 text-white caret-white caret-2 focus: outline-none"
              type="text"
              onKeyUp={handleKeyUp}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen;
