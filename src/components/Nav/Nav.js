import React, {Component} from "react";
import LoginBox from "../LoginBox/LoginBox";
import "../Nav/Nav.scss";
import {AiOutlineSearch} from "react-icons/ai";
import {BsPerson} from "react-icons/bs";
import {HiOutlineQuestionMarkCircle} from "react-icons/hi";
import {AiOutlineShopping} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineMenu} from "react-icons/ai";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      showComponent: false,
      searchIcon: true,
    };
  }
  //   toggle
  handleLoginBox = () => {
    this.setState({
      showComponent: !this.state.showComponent,
    });
  };

  handleSearchIcon = () => {
    this.setState({
      searchIcon: !this.state.searchIcon,
    });
  };

  render() {
    //event bubbling
    const searchEvent = (event) => {
      event.stopPropagation();
    };

    return (
      <div className="navBar">
        <div className="lineBtn">
          <AiOutlineMenu size={28} />
        </div>
        <div className="brandName"> ARKET </div>
        <div className="itemList">
          <ul>
            <li>WOMEN</li>
            <li>MEN</li>
            <li>CHILDREN</li>
            <li>HOMEWARE</li>
            <li>BABY</li>
            <li>TRAVEL</li>
          </ul>
        </div>
        <div className="iconList">
          <ul>
            <li>
              {this.state.searchIcon ? (
                <button onClick={this.handleSearchIcon}>
                  <AiOutlineSearch size={28} />
                </button>
              ) : (
                <button onClick={this.handleSearchIcon}>
                  <div className="searchInput" onClick={searchEvent}>
                    <input placeholder="Search products" type="text" />
                  </div>
                  <AiOutlineClose size={28} />
                </button>
              )}
            </li>

            <li>
              <button onClick={this.handleLoginBox}>
                <BsPerson size={30} />
              </button>
            </li>
            <li>
              <HiOutlineQuestionMarkCircle size={30} />
            </li>
            <li>
              <AiOutlineShopping size={30} />
            </li>
          </ul>
        </div>
        {this.state.showComponent && <LoginBox LoginBox={LoginBox} />}
      </div>
    );
  }
}

export default Nav;
