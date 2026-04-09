import "./styles/Career.css";

const experiences = [
  { role: "Flutter Lead", company: "GDSC SIT Pune", date: "Jan 2025 – Present", description: "Leading the Flutter development team, guiding members in building cross-platform applications and organizing technical workshops." },
  { role: "Tech Member", company: "CodeX SIT", date: "Aug 2024 – Present", description: "Actively contributing to technical projects, participating in coding competitions, and fostering a coding culture." },
  { role: "Events Lead", company: "FOSS Club SIT Pune", date: "Dec 2023 – Present", description: "Organizing and managing open-source development events, hackathons, and technical meetups." },
  { role: "Website Team Head", company: "SymbITech", date: "Jan 2025 – July 2025", description: "Leading the website development team to build and maintain the official technical fest platform." },
  { role: "Tech Member", company: "AI Club SIT Pune", date: "Present", description: "Exploring artificial intelligence, building machine learning models, and collaborating on AI projects." },
  { role: "Programming Member", company: "Rotonity Club", date: "Present", description: "Participating in programming activities and core technical discussions." },
  { role: "Member", company: "VarSITy Care", date: "Present", description: "Involved in technical initiatives and team coordination." }
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {experiences.map((exp, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.role}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3>{exp.date}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
