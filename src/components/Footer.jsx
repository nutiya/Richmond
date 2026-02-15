import schoolLogo from "../assets/school-logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <img src={schoolLogo} alt="Richmond International Center logo" className="footer-logo" />
          <div>
            <p>&copy; {new Date().getFullYear()} Richmond International Center. All rights reserved.</p>
            <p>Academic excellence with global perspective.</p>
          </div>
        </div>
        <p className="footer-tagline">Inspire. Learn. Lead.</p>
      </div>
    </footer>
  );
}

export default Footer;
