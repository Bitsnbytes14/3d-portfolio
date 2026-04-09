import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para" style={{ fontSize: "clamp(18px, 2.5vw, 33px)", lineHeight: "1.4" }}>
          I am a Backend-focused Full Stack Developer currently pursuing B.Tech in Computer Science at Symbiosis Institute of Technology, Pune. I primarily work with Node.js, Express, MongoDB, and React, and actively explore cloud platforms and DevOps practices.<br/><br/>
          My core interest lies in backend engineering — designing APIs, building real-time systems, and developing scalable, production-ready applications.<br/><br/>
          I continuously improve my problem-solving skills through Data Structures &amp; Algorithms and actively contribute to open-source and technical communities.
        </p>
      </div>
    </div>
  );
};

export default About;
