import React from "react";
import Typing from "react-typing-effect";
import picture from "../assets/profilePic.jpg";

export const About = ({ description }) => {
  return (
    <section id="home">
      <aside className="information">
        <h1>
          Tomas Ruiz{" "}
          <Typing
            startDelay={0}
            text={"Frontend Developer"}
            eraseSpeed={150}
            eraseDelay={40}
            speed={100}></Typing>
        </h1>
        <p id="desc">{description}</p>
        <div className="buttons">
          <button>
            <a href="#contact">Contact me!</a>
          </button>
        </div>
      </aside>
      <aside>
        <picture>
          <img src={picture} alt="" />
        </picture>
      </aside>
    </section>
  );
};
