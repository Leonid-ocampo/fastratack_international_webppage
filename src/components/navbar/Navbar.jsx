import React, { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "../data/MenuItems";
import { Link } from "react-router-dom";
import logo from "../../assets/logo FTL.png";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav className="NavbarItems">
          <img className="fastracklogo" src={logo} alt="logoFT" />
          <h1 className="navbar-logo">FastTrackLanguages International </h1>

          <div className="menu-icons" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
