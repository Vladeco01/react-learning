import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./RStudio-4.jpg";

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
  return <image src="RStudio-4.jpg" />;
}

function Intro() {
  return;
}

function SkillList() {
  return;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
