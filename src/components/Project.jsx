import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
export const Project = ({
  projectName,
  description,
  languages,
  gitLink,
  liveLink,
  img,
  delay,
}) => {
  const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // cuando el componente está completamente en la pantalla
    triggerOnce: false, // sólo se activa la primera vez que es visto
  });
  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);
  return (
    <div
      className={`project ${animate ? "animatePr" : ""}`}
      style={{ animationDelay: { delay } }}
      ref={ref}
      onAnimationEnd={() => setAnimate(false)}>
      {" "}
      <picture>
        <img src={img} />
      </picture>
      <div className="info">
        <div className="languages">{languages}</div>
        <h3>{projectName}</h3>
        <p>{description}</p>
        <div className="buttons">
          <a href={gitLink} target="_blank">
            <button>
              Repo <box-icon type="logo" name="github"></box-icon>
            </button>
          </a>
          <a href={liveLink} target="_blank">
            <button>
              Live <box-icon type="solid" name="right-arrow"></box-icon>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
