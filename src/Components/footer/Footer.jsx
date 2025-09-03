import { RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-background">
      <footer className="footer-flex">
        <div className="Copyright">
          ©Copyright2025 <a>Silke Johansen </a>
        </div>

        <div className="TopLink">
          <Link to="top" smooth={true} duration={500}>
            BACK TO TOP <RiArrowDropUpLine size={25} color="#FFB806" />
          </Link>
          
        </div>
      </footer>
    </div>
  );
};
export default Footer;
