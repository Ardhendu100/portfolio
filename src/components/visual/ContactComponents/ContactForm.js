import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const [success, setsuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setsuccess(true);
    emailjs
      .sendForm(
        "template_8vdhcao", // service Id
        "template_5gagyis", // Tempalte ID
        form.current, // data
        "HX0lU-VEMegPgZ7LT" // Public API Key
      )
      .then(
        (result) => {
          form.current.reset();
          setsuccess(true);
        },
        (error) => {
          form.current.reset();
        }
      );
  };
  return (
    <div className="mt-14">
      {success && <div className="mb-2">Successfully Send !! 😊</div>}
      <form ref={form} onSubmit={sendEmail} className="space-y-5">
        <div>
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            required
            className="w-80 md:w-[500px] h-12 bg-[#bbbbbb] outline-none p-2 pl-3 text-lg md:text-2xl placeholder-black"
          />
        </div>
        <div>
          <input
            type="email"
            name="from_email"
            placeholder="Email"
            required
            className="w-80 md:w-[500px] h-12 bg-[#bbbbbb] outline-none p-2  pl-3 text-lg md:text-2xl placeholder-black"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-80 md:w-[500px] h-52 bg-[#bbbbbb] outline-none resize-none p-2 pl-3 text-lg md:text-xl placeholder-black"
          />
        </div>
        <div className="flex justify-center lg:justify-end">
          <button
            type="submit"
            className="w-80 md:w-[500px] px-10 py-1 text-xl text-white bg-black hover:bg-white hover:text-black border-2 border-black">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
