import React, {Component} from "react";
import "../LoginBox/LoginBox.scss";
import {BsCheckBox} from "react-icons/bs";

class LoginBox extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="firstLine">
            <span className="leftText">SIGN IN</span>
            <span className="rightText">CREATE ACCOUNT</span>
          </div>
          <div className="inputBox">
            <input placeholder="Email" type="text" />
            <input placeholder="Password" type="password" />
          </div>
          <div className="checkBox">
            <BsCheckBox />
            <span>Keep me signed in</span>
          </div>
          <button>Continue</button>
          <p>reset password</p>
        </div>
      </>
    );
  }
}
export default LoginBox;
