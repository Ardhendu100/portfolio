import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="mt-32 mb-32">
      <div className="flex justify-center text-4xl font-semibold text-center">
        Have Something in Mind ?
      </div>
      <div className="flex justify-center text-3xl font-medium mt-3 ">
        I am available
      </div>
      <div className="flex justify-center mt-3">
        <Link to="/contact">
          <button
            className="text-white bg-black mt-5 px-3 py-2 rounded-lg w-60 text-xl hover:text-black hover:bg-transparent
          border border-black">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
