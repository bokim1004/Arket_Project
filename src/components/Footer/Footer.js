import React, {Component} from "react";
import "../Footer/Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footerList">
          <p>Information</p>
          <ul className="firstLine">
            <li>Newsletter - sign up for 10% off</li>
            <li>Customer service</li>
            <li>Stores and cafes</li>
            <li>Size guide</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Affiliate</li>
            <li>My account</li>
            <li>Privacy policy</li>
            <li>International</li>
          </ul>
        </div>
      </footer>
    );
  }
}
export default Footer;
