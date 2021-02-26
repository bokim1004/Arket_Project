import React from "react";
import "../Nav/Nav.scss";
import {AiOutlineSearch} from "react-icons/ai";
import {BsPerson} from "react-icons/bs";
import {HiOutlineQuestionMarkCircle} from "react-icons/hi";
import {AiOutlineShopping} from "react-icons/ai";

const Nav = () => {
  return (
    <div className="navBar">
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
            <button>
              <AiOutlineSearch size={28} />
            </button>
          </li>
          <li>
            <BsPerson size={30} />
          </li>
          <li>
            <HiOutlineQuestionMarkCircle size={30} />
          </li>
          <li>
            <AiOutlineShopping size={30} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
