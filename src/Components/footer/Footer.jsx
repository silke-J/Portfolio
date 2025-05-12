import { RiArrowDropUpLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="footer-background">
      <footer className="footer-flex">

        <div className="Copyright">
          ©Copyright2025 <a>Silke Johansen </a>
        </div>

        <div className="TopLink">
          <a href="#top">
            BACK TO TOP <RiArrowDropUpLine size={25} color="#FFB806" />
          </a>
        </div>

      </footer>
    </div>
  );
};
export default Footer;
