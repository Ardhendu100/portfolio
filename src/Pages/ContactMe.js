import React from "react";
import ContactForm from "../components/visual/ContactComponents/ContactForm";
import Footer from "../components/visual/HomeComponents/Footer";
import Navbar from "../components/visual/HomeComponents/Navbar";

function ContactMe() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-8">
        <div className="flex justify-center font-bold text-3xl md:text-4xl text-center px-5">
          How Can I Help ?
        </div>
        <div className="flex justify-center font-semibold text-xl md:text-2xl mt-3 text-center px-5">
          Drop me a line and I'll get back to you shortly.
        </div>
        <div className="flex justify-center space-x-5 px-10">
          <ContactForm></ContactForm>
          <div className="hidden md:inline-block w-[500px] h-[500px] bg-cover bg-center">
            <img src="assets/contactUs.svg" alt="Get In Touch" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ContactMe;
