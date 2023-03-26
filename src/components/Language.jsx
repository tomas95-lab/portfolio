import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Language = ({ programName, delay, logo }) => {
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
    <>
      <div
        style={{ animationDelay: { delay } }}
        className={`my-component ${animate ? "animate" : ""}`}
        ref={ref}
        onAnimationEnd={() => setAnimate(false)}>
        <picture>
          <img src={logo} alt={programName} />
        </picture>
        <h3>{programName}</h3>
      </div>
    </>
  );
};
