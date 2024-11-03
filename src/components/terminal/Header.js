import { logoData } from "../../utils/terminalData/data";

function Header() {
  let logoHeader = logoData.join("\n");
  return (
    <>
      <pre>
        <code className="text-white">{logoHeader}</code>
      </pre>
    </>
  );
}

export default Header;
