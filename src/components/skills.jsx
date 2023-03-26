import { Language } from "./Language";
import { languagesF } from "../logic/languages";

export const Skills = () => {
  let delayS = 0;
  return (
    <section id="skills" className="section">
      <h2 className="section-title">
        <span>#</span>
        Skills
      </h2>
      <div className="language-container">
        {languagesF.map((program) => {
          return (
            <Language
              key={program.programName}
              delay={(delayS += 0.3)}
              logo={program.logoS}
              programName={program.programName}></Language>
          );
        })}
      </div>
    </section>
  );
};
