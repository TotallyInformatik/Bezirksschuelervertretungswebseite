import React from "react";
import { NavLink } from "react-router-dom";

class IndexHeaderLink extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li className="navigation-link"><NavLink to={this.props.link} onClick={() => window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })}>{this.props.display}</NavLink></li>
    );
  }

}

export default IndexHeaderLink;
