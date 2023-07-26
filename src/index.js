import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
      <Skill skill="React" emoji="💪🏻" color="#123456" />
      <Skill skill="HTML" emoji="💪🏻" color="orangered" />
      <Skill skill="CSS" emoji="💪🏻" color="yellow" />
      <Skill skill="JavaScript" emoji="💪🏻" color="grey" />
      <Skill skill="Bootstrap" emoji="💪🏻" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
