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
    console.log(this.state.menuOpen);
  }

  render() {
    return(
      <nav>
        <div 
          className="menu-button" 
          title="menu" 
          onClick={this.toggleMenu}
          // TODO: Background Image does not fully work
          style={{
            backgroundImage: this.state.menuOpen ? menuIcon : closeIcon
          }}
        ></div>
        <ul 
          className={"navigation-links " + (this.state.menuOpen ? "open" : "closed" ) }
        >
          <IndexHeaderLink link="/" display="Homepage" />
          <IndexHeaderLink link="/aktuelles" display="Aktuelles" />
          <IndexDetailedLink link="/dokumente" display="Dokumente">
            <IndexHeaderLink link="/arbeitsprogramm-2020-21" display="Arbeitsprogramm 2020/2021" />
            <IndexHeaderLink link="/satzung" display="Satzung" />
            <IndexHeaderLink link="/wahl-und-geschaeftsordnung" display="Wahl- und Geschäftsordnung" />
          </IndexDetailedLink>
          <IndexDetailedLink link="/resolutionen" display="Resolutionen">
            <IndexHeaderLink link="/wirtschaft-als-fach" display="Resolution Wirtschaft als Fach" />
            <IndexHeaderLink link="/resolution-abschiebungen" display="Resolution Abschiebungen" />
            <IndexHeaderLink link="/lgbtq" display="Resolution LGBTQ+" />
          </IndexDetailedLink>
          <IndexDetailedLink link="/resolutionen" display="Reden">
            <IndexHeaderLink link="/wirtschaft-als-fach" display="Rede zum ZeroCovid-Aktionstag" />
            <IndexHeaderLink link="/resolution-abschiebungen" display="Rede zum globalen Klimastreik" />
            <IndexHeaderLink link="/lgbtq" display="Rede zum Red Hand Day" />
            <IndexHeaderLink link="/lgbtq" display='Rede zur "Kein Meter für Querdenken!" - Kundgebung' />
          </IndexDetailedLink>
          <IndexHeaderLink link="/mach-mit" display="Mach Mit!" />
          <IndexDetailedLink link="/resolutionen" display="Kontakt">
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