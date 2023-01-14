import React from 'react'
import UserIcon from "../../assets/user-icon.svg";

import './style.scss'

export function NavTop() {
  return (
    <nav className="nav-top">
      <img src={UserIcon} alt="Logo rodfinance" height={25} className="user-icon"/>
    </nav>
  );
}