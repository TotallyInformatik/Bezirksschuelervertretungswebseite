import React from "react";

import IndexHeaderLink from "./index-link";
import IndexDetailedLink from "./index-detailed-link";

import "./navigation.css";
import menuIcon from "./menu_black_24dp.svg";
import closeIcon from "./close_black_24dp.svg";


class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {

    const resolutionen = [];
    const dokumente = [];
    const reden = [];
    
    for (let resolution of this.context.resolutions) {
      let link = resolution[1];
      let title = resolution[2];
      resolutionen.push(<IndexHeaderLink key={link} link={link} display={title} />);
    }

    for (let rede of this.context.speeches) {
      let link = rede[1];
      let title = rede[2];
      reden.push(<IndexHeaderLink key={link} link={link} display={title} />);
    }
    
    for (let dokument of this.context.documents) {
      let link = dokument[1];
      let title = dokument[2];
      dokumente.push(<IndexHeaderLink key={link} link={link} display={title} />);
    }


    return(
      <nav>
        <div 
          className="menu-button" 
          title="menu" 
          onClick={this.toggleMenu}
          style={{
            backgroundImage: this.state.menuOpen ? menuIcon : closeIcon
          }}
        ></div>
        <ul 
          className={"navigation-links " + (this.state.menuOpen ? "open" : "closed" ) }
        >
          <IndexHeaderLink link="/" display="Home" />
          <IndexHeaderLink link="/aktuelles" display="Aktuelles" />
          <IndexDetailedLink link="/dokumente" display="Dokumente">
            {dokumente}
          </IndexDetailedLink>
          <IndexDetailedLink link="/resolutionen" display="Resolutionen">
            {resolutionen}
          </IndexDetailedLink>
          <IndexDetailedLink link="/reden" display="Reden">
            {reden}
          </IndexDetailedLink>
          <IndexHeaderLink link="/mach-mit" display="Mach Mit!" />
          <IndexDetailedLink link="/contact" display="Kontakt">
            <li><a href="mailto:info@bsv-duesseldorf.de">E-mail</a></li>
            <li><a href="https://www.instagram.com/bsv.duesseldorf/">Instagram</a></li>
            <li><a href="https://www.facebook.com/bsvduesseldorf">Facebook</a></li>
            <li><a href="https://twitter.com/BsvDusseldorf">Twitter</a></li>
          </IndexDetailedLink>
        </ul>
      </nav>
    );
  }

}

export default Navigation;