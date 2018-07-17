import React from "react";
import "./Header.css";

const Header = props => <h1 className="header">{props.children}</h1>;
// why isn't the text(props.children) showing up here?

export default Header;