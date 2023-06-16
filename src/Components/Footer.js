import "./FooterStyles.css";
import logo from "../assets/logo.jpg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <div className="nav-bar-logo">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="navbar-logo">SUZUKI</h1>
          </div>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div class="bottom">
        <div>
          <h4>Products</h4>
          <a href="/">Dealer</a>
          <a href="/">Booking</a>
          <a href="/">Parts </a>
          <a href="/">Test Drive</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Customer Care</a>
          <a href="/">Service Campaign</a>
          <a href="/">Contact Us</a>
          <a href="/">Feedback</a>
        </div>
        <div>
          <h4>Address</h4>
          <a href="/">Canal Road</a>

          <a href="/">021-111-SUZUKI</a>
          <a href="/">SMS: 9891</a>
          <a href="/">suzukicanal@ed.pk</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Term of Services</a>

          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
