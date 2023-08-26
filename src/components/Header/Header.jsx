import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src={props.logo} alt="logo"></img>
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
