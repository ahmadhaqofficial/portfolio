import React from "react";
import "./About.css";
import aboutPic from "../../Assets/about/aboutPic.jpg";
import aboutSvg from "../../Assets/about/about-svg.svg";
import cvFile from "../../Assets/about/Mehfooz-ur-Rehman_CV.docx";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-content about-section">
        <div className="about-pic-container">
          <img src={aboutSvg} alt="about-svg" className="about-svg" />
          <img src={aboutPic} alt="about-pic" className="about-pic" />
        </div>
        <div className="about-section-content">
          <div className="section-heading about-section-heading">About Me</div>
          <div className="section-about about-section-about">
            Why hire me for your next project?
          </div>
          <p>
            I'm Creative Director and UI/UX Designer from New York, working in
            web development and print media. I enjoy turning complex problems
            into simple, beautiful and intuitive designs.
          </p>
          <p>
            My job is to build your website so that it is functional and
            user-friendly but at the same time attractive. Moreover, I add a
            personal touch to your product and make sure that it is eye-catching
            and easy to use. My aim is to bring across your message and identity
            in the most creative way.
          </p>
          <a href={cvFile} className="about-btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
