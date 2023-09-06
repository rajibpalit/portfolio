import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="eperience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="eperience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="eperience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <h4>Javascript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="eperience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="eperience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="eperience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="eperience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="eperience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Mysql</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="eperience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Nodejs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="eperience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="eperience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
