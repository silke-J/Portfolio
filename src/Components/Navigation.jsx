import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from "../../public/logo.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" id="top">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <a href="#about">Om mig </a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#skill">Skills</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;