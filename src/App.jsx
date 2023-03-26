import "./App.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/skills";
import React from "react";
import ReactDOM from "react-dom";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
function App() {
  console.log("React version:", React.version);
  console.log("ReactDOM version:", ReactDOM.version);
  return (
    <>
      <main>
        <Header></Header>
        <About
          description={
            "Hi! a few years ago, I became interested in developing websites and interfaces. Since then, I have been steadily improving my skills."
          }></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
