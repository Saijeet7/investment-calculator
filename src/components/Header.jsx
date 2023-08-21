import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <img src={props.logo} alt="logo"></img>
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
