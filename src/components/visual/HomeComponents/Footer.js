import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { GithubUrl, LinkedInUrl, TwitterUrl } from "../../../utils/urls";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="mb-5 mt-10">
      <div className="flex justify-center space-x-5">
        <a href={LinkedInUrl} rel="noreferrer" target="_blank">
          <FaLinkedin
            size={45}
            className="hover:scale-125 duration-200 cursor-pointer"></FaLinkedin>
        </a>
        <a href={TwitterUrl} rel="noreferrer" target="_blank">
          <FaSquareXTwitter
            size={45}
            className="hover:scale-125 duration-200 cursor-pointer"></FaSquareXTwitter>
        </a>
        <a href={GithubUrl} rel="noreferrer" target="_blank">
          <FaGithubSquare
            size={45}
            className="hover:scale-125 duration-200 cursor-pointer"></FaGithubSquare>
        </a>
      </div>
      <div className="flex justify-center mt-5">
        Made with ❤️ by
        <a href={LinkedInUrl} rel="noreferrer" target="_blank">
          <span className="underline ml-1 italic font-medium underline-offset-2 cursor-pointer">
            Ardhendu
          </span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
