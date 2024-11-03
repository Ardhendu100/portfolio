import React from "react";
import Navbar from "../components/visual/HomeComponents/Navbar";

function Blog() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center mt-10 mb-3 text-2xl">
        Coming Soon...
      </div>
      <div className="flex justify-center h-[500px]">
        <img src="assets/under-construction.svg" alt="Comming Soon" />
      </div>
    </div>
  );
}

export default Blog;
