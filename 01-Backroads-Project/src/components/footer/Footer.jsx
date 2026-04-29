import Link from "../Link";
import FOOTER_ICONS from "./footerIcons";
import Icon from "../Icon";

const Footer = ({ scrollToSection, sectionNames }) => {
    const handleClick = (name) => {
    const index = sectionNames.indexOf(name);
    if (index !== -1) scrollToSection(index);
  };
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {sectionNames.map((name) => (
          <Link
            key={name}
            name={name}
            className="footer-link"
            onScroll={handleClick}
          />
        ))}
      </ul>
      <ul className="footer-icons">
        {FOOTER_ICONS.map((footerIcon) => (
          <Icon key={footerIcon.id} {...footerIcon} />
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
