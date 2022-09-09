import React from "react";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import ArchiveIcon from "@mui/icons-material/Archive";
import DialpadIcon from '@mui/icons-material/Dialpad';

const Navbar = ({ screen, setScreen }) => {
  return (
    <footer>
      <span className="nav-item">
        <PhoneEnabledIcon
          onClick={() => {
            setScreen("Home");
          }}
        />
      </span>
      <span className="nav-item">
        <PeopleIcon />
      </span>
      <span className="nav-item">
        <DialpadIcon />
      </span>
      <span className="nav-item">
        <SettingsIcon />
      </span>
      <span className="nav-item">
        <ArchiveIcon
          onClick={() => {
            setScreen("Archive");
          }}
        />
      </span>
    </footer>
  );
};

export default Navbar;
