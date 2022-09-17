import React from "react";

export const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-content">
        <hr />
        <article className="Hero-article">
          <span>
            Hi I'm <br />
            Bhaskar Sharma <br />
          </span>
          <p className="Hero-text">
            A passionate backend developer who can learn and build great tech
            products. I have done graduation in computer science. I'm currently
            working as backend intern at RedCarpetup that is a fintech company.
            I have also learned cloud and front development.
          </p>
        </article>
        <span className="BtnWrap">
          <a href="https://linkedin.com/in/view-bhaskar" target="_blank" rel="noopener noreferrer">
            <button className="Linkedin-btn">Connect On Linkedin</button>
          </a>
        </span>
      </div>
      <div className="Hero-image">
        <div className="Hero-image-container"></div>
      </div>
    </div>
  );
};

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <h2>LOGO</h2>
      </div>
      <ul className="nav-list">
        <li>
          <a href="#Home" className="Nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="Nav-link">
            Contact
          </a>
        </li>
        <li>
          <a href="#Home" className="Nav-link">
            Share
          </a>
        </li>
      </ul>
    </nav>
  );
};
