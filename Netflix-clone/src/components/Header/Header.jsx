import React from "react";
import "./Header.css";
import Netflixlogo from "../../assets/netflix.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="header-outer-container">
      <div className="header-inner-container">
           <div className="header-left-section">
          <ul className="nav-links-left">
            <li>
              <img src={Netflixlogo} alt="Netflix-logo" width="100" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Games</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        {/* Right side (icons) */}
        <div className="header-right-section">
          <ul className="nav-links-right">
            <li>
              <SearchIcon/>
            </li>
            <li>
              <NotificationsNoneIcon/>
            </li>
            <li>
              <AccountBoxIcon/>
            </li>
            <li>
              <ArrowDropDownIcon/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
