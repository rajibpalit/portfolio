import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>rajibpalit@ymail.com</h5>
            <a href="mailto:rajibpalit@ymail.com" target="_blank">
              {" "}
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Rajib Palit</h5>
            <a href="https://m.me/nisorgo.nirontor" target="_blank">
              {" "}
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+358 466 891316</h5>
            <a
              href="https://api.whatsapp.com/send?phone=358466891316"
              target="_blank"
            >
              {" "}
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Full Name"
          />
          <input type="email" name="email" required placeholder="Your Email" />
          <textarea
            name="message"
            rows="7"
            required
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
