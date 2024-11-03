import React from "react";
import Navbar from "./visual/HomeComponents/Navbar";

function PageNotFound() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center mt-10">
        <img src="assets/404Image.svg" alt="404 Page Not Found" />
      </div>
    </div>
  );
}

export default PageNotFound;
