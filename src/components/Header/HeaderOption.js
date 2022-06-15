import React from "react";
import "./HeaderOption.css";
import Avatar from "@mui/material/Avatar";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      {title && <span className="headerOption__title">{title}</span>}
    </div>
  );
}

export default HeaderOption;
