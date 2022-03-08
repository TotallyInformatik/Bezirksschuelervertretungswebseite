import React from "react";

import IndexHeaderLink from "./index-link";

class IndexDetailedLink extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      submenuOpen: false
    };
    this.openSubMenu = this.openSubMenu.bind(this);
    this.closeSubMenu = this.closeSubMenu.bind(this);
  }

  openSubMenu() {
    this.setState({
      submenuOpen: true
    });
  }

  closeSubMenu() {
    this.setState({
      submenuOpen: false
    });
  }

  render() {
    return (
        <li className="navigation-link-detailed">
          <a className="navigation-link-heading" onClick={this.openSubMenu}>{">"} {this.props.display}</a>
          <nav 
            className={this.state.submenuOpen ? "sub-menu menu-open" : "sub-menu menu-closed"} 
          >
            <div 
              className="navigation-back-button" 
              onClick={this.closeSubMenu}
            ></div>
            <ul>
              <IndexHeaderLink link={this.props.link} display={"> " + this.props.display} />
              {this.props.children}
            </ul>
          </nav>
        </li>
    );
  }

}

export default IndexDetailedLink;