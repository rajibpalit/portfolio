import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_conntent">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="class_icon" />
              <h5> Experiencd </h5>
              <small>6+ years eperience</small>
            </article>
            <article className="about_card">
              <FiUsers className="class_icon" />
              <h5> Clients </h5>
              <small>20+ Worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="class_icon" />
              <h5> Projects </h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            I am a back-end programmer. My expertise in PHP with several types
            of frameworks like as: Laravel, CodeIgniter, symfony and some CMS.
            Also working in reactjs, Mysql database and Docker. Use
            git for versioning control.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
