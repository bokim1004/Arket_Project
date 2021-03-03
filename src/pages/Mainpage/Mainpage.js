import React, {Component} from "react";
import "../Mainpage/Mainpage.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

class Mainpage extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl1: [
        "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=kristina-v-hYdikKrex4U-unsplash.jpg",
        "https://images.unsplash.com/photo-1504899567410-7501a313cadd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=lucas-sankey-LVMG26EQfsk-unsplash.jpg",
        "https://images.unsplash.com/photo-1531129630896-1744cab0cafd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=vidar-nordli-mathisen-yxwBJjtgtUs-unsplash.jpg",
        "https://images.unsplash.com/photo-1601334168721-95df916e53d5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=italic-l_r4BWqLrVs-unsplash.jpg",
      ],
      imageUrl2: [
        "https://images.unsplash.com/photo-1597524678053-5e6fef52d8a3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=larry-crayton-cf1cN3ofKUM-unsplash.jpg",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=tamara-bellis-68csPWTnafo-unsplash.jpg",
        "https://images.unsplash.com/photo-1576653172248-9262d19549a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=andriyko-podilnyk-8zpOShNJmLE-unsplash.jpg",
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=nathan-dumlao-zUNs99PGDg0-unsplash.jpg",
      ],
      imageUrl3: [
        "https://images.unsplash.com/photo-1551908208-cfc1c27e8e8e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=christiann-koepke-uyzMBs2KWCU-unsplash.jpg",
        "https://images.unsplash.com/photo-1518838439236-2b73ceb4638a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=charles-etoroma-k78R0lDxd48-unsplash.jpg",
        "https://images.unsplash.com/photo-1554695582-858cc5092064?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=irene-strong-I3w6ylm9LPg-unsplash.jpg",
      ],
    };
  }

  render() {
    const {imageUrl1, imageUrl2, imageUrl3} = this.state;
    return (
      <>
        <Nav />
        <body>
          <div className="mainImg">
            <div className="mainText">
              <h2 className="mainTitle">
                <span>S/S 2021</span>
                <span className="modern">Modern Marinière</span>
              </h2>
              <div className="mainTag">
                <ul>
                  <li>Women </li>
                  <li>Men</li>
                  <li>Children</li>
                </ul>
              </div>
            </div>
            <div className="imgCover"></div>
          </div>
          <div className="imgContainer">
            <div className="imgList">
              <img src={imageUrl1[0]} alt="women" />
              <p>Women</p>
            </div>
            <div className="imgList">
              <img src={imageUrl1[1]} alt="men" />
              <p>Men</p>
            </div>
            <div className="imgList">
              <img src={imageUrl1[2]} alt="children" />
              <p>Children</p>
            </div>
            <div className="imgList">
              <img src={imageUrl1[3]} alt="homeware" />
              <p>Homeware</p>
            </div>
            <div className="cover"></div>
          </div>
          <div className="imgContainer">
            <div className="imgList">
              <img src={imageUrl2[0]} alt="family" />
              <p>ARKET Family</p>
            </div>
            <div className="imgList">
              <img src={imageUrl2[1]} alt="newCloth" />
              <p>New arrivals</p>
            </div>
            <div className="imgList">
              <img src={imageUrl2[2]} alt="baby" />
              <p>Baby</p>
            </div>
            <div className="imgList">
              <img src={imageUrl2[3]} alt="cafe" />
              <p>Arket cafe</p>
            </div>
            <div className="cover"></div>
          </div>
          <div className="lastMainpage">
            <div className="explore">
              <span>EXPLORE</span>
              <span>ARKET</span>
            </div>
            <div className="lastImgs">
              <div className="imgs">
                <img src={imageUrl3[0]} alt="arket" />
                <p>About ARKET</p>
              </div>
              <div className="imgs">
                <img src={imageUrl3[1]} alt="sustain" />
                <p>Sustainability Fact Sheet</p>
              </div>
              <div className="imgs">
                <img src={imageUrl3[2]} alt="recycle" />
                <p>Recycle with ARKET</p>
              </div>
            </div>
          </div>
        </body>
        <Footer />
      </>
    );
  }
}

export default Mainpage;
