import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from "../../public/logo.svg";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" id="top">
      <a onClick={scrollToContact} href="/">
        <img src={logo} alt="logo" />
      </a>
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <a onClick={scrollToContact} href="#about">
            Om mig
          </a>
        </li>
        <li>
          <p onClick={scrollToContact}>
          Portfolio
          </p>
        </li>
        <li>
          <a onClick={scrollToContact} href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a onClick={scrollToContact} href="#contact">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
