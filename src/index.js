import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills =[
  {
    skill: "HTML-CSS",
    level: "advanced",
    color: "#262EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFDB1D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "#EFDB1D"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "NodeJS",
    level: "beginner",
    color: "#FF3000"
  }

];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="image.jpg" alt="image" />;
}

function Intro() {
  return (
    <div>
      <h1>Thandeka Zulu</h1>
      <p>
        Full-Stack Developer. I enjoy creating and learning different coding
        languages.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill)=> (
      <Skill skill={skill.skill} color={skill.color} level={skill.level} />))} 
    </div>
  );
}

function Skill({skill, color, level}) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍🏻"}
        {level === "advanced" && "💪🏻"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
