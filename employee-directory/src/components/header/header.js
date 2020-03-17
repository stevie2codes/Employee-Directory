import React from "react";
import "./header.css";

const Header = props => {
  return (
    <React.Fragment>
      <div className="headerContainer">
        <h1 className="headerText">Employee-Directory</h1>
      </div>
    </React.Fragment>
  );
};

export default Header;
