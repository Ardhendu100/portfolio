import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { HiCheckCircle } from "react-icons/hi";

function ContactForm() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        "service_o10z3q2",  // Replace with your actual Service ID from EmailJS dashboard
        "template_8vdhcao",           // Your Template ID
        form.current,                  // Form reference
        "HX0lU-VEMegPgZ7LT"           // Your Public Key
      )
      .then(() => {
        form.current.reset();
        setSuccess(true);
        setSending(false);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send message. Please try again.");
        setSending(false);
      });
  };

  const inputClass =
    "w-full bg-surface border border-border rounded-lg px-4 py-3 text-white placeholder-muted text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-200";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-lg">
      {success ? (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center justify-center py-16 text-center">
          <HiCheckCircle size={56} className="text-accent mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-subtle text-sm">I'll get back to you shortly. 🚀</p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-6 text-accent text-sm underline underline-offset-4 hover:text-white transition-colors">
            Send another message
          </button>
        </motion.div>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-xs text-muted font-medium mb-1.5 tracking-wider uppercase">Name</label>
            <input type="text" name="from_name" placeholder="Your name" required className={inputClass} />
          </div>
          <div>
            <label className="block text-xs text-muted font-medium mb-1.5 tracking-wider uppercase">Email</label>
            <input type="email" name="from_email" placeholder="your@email.com" required className={inputClass} />
          </div>
          <div>
            <label className="block text-xs text-muted font-medium mb-1.5 tracking-wider uppercase">Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project or opportunity..."
              required
              rows={6}
              className={`${inputClass} resize-none`}
            />
          </div>
          <motion.button
            type="submit"
            disabled={sending}
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px #00d4ff33" }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 py-3 bg-accent text-bg font-bold text-sm rounded-lg disabled:opacity-50 transition-all">
            {sending ? "Sending..." : "Send Message"}
            {!sending && <BsArrowRight size={15} />}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}

export default ContactForm;
