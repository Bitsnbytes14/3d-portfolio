import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    name: "Codemia (FLAGSHIP)",
    category: "Automated Grading Platform",
    tools: "Node.js, Express, Redis, BullMQ, Supabase",
    image: "/images/codemia.jpeg",
    link: "https://github.com/Bitsnbytes14"
  },
  {
    name: "AI Resume Builder",
    category: "AI Optimization Platform",
    tools: "React, Node.js",
    image: "/images/ai_resume.png",
    link: "https://github.com/Bitsnbytes14"
  },
  {
    name: "Real-Time Chat App",
    category: "WebSocket Chat System",
    tools: "Node.js, Socket.io",
    image: "/images/chat.png",
    link: "https://github.com/Bitsnbytes14"
  },
  {
    name: "Netflix-Style Portfolio",
    category: "Web Application",
    tools: "Next.js, Tailwind CSS",
    image: "/images/preview.png",
    link: "https://ahmad-netflix-portfolio-ujir.vercel.app/"
  },
  {
    name: "Event Ticket Management",
    category: "Desktop Application",
    tools: "Java, Swing, MySQL, JDBC",
    image: "/images/event.png",
    link: "https://github.com/Bitsnbytes14/Event-Management-Ticket-System"
  },
  {
    name: "Business Insights Dashboard",
    category: "Financial Analytics",
    tools: "Power BI, Excel, Data Analysis",
    image: "/images/Dashboard.png",
    link: "https://github.com/Bitsnbytes14/business-insights-dashboard"
  }
];

const Work = () => {
  return (
    <div className="work-section section-container" id="work">
      <div className="work-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-box-grid" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
