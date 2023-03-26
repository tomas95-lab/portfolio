import character from "../assets/character.png";
export const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:truiz050904@gmail.com";
  };
  return (
    <section id="contact" className="section">
      <h2 className="section-title">
        <span>#</span> Contact me
      </h2>
      <p>
        Feel free to send me an email if you have any inquiries or just want to
        say hello!
      </p>
      <button onClick={handleEmailClick}>Send email</button>
    </section>
  );
};
