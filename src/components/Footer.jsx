import githubLogo from "../assets/github.svg";
export const Footer = () => {
  return (
    <footer>
      <div className="container_info">
        <div className="info_contact">
          <p>Tomás</p>
          <a href="mailto:truiz050904@gmail.com">truiz050904@gmail.com</a>
        </div>
        <div className="media">
          <h3>media</h3>
          <a target="_blank" href="https://github.com/tomas95-lab">
            <box-icon type="logo" name="github"></box-icon>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/tomas-ruiz-191752227/">
            <box-icon name="linkedin-square" type="logo"></box-icon>
          </a>
        </div>
      </div>
      <div className="copy">
        <p>© Copyright 2023. Made by Tomás Ruiz</p>
      </div>
    </footer>
  );
};
