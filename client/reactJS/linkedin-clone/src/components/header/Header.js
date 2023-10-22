import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import { SupervisorAccount } from "@material-ui/icons";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Header = () => {
  return (
    <div className="header">
      {/* LEFT HEADER */}
      <div className="header__left">
        <img
          src={
            "https://www.freepnglogos.com/uploads/linkedin-in-logo-png-1.png"
          }
          alt=""
        />
        {/* search */}
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      {/* RIGHT HEADER */}
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="Network" />
        <HeaderOption Icon={ChatIcon} title="Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Network" />
        <HeaderOption Icon={NotificationsIcon} title="Network" />
        <HeaderOption
          title="me"
          avatar={
            "https://media.licdn.com/dms/image/D4D03AQGLiz3AAS2BQA/profile-displayphoto-shrink_200_200/0/1686005784347?e=1703721600&v=beta&t=ekXi9MZ9WVLIEkolyS5ZNaMfnlsZuQtLrWFIcB5JHWw"
          }
        />
      </div>
    </div>
  );
};

export default Header;
