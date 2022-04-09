import React from "react";
import { NavLink } from "react-router-dom";
import PageTemplate from "../Template/boring-page-template";

import styles from "./MachMit.css";
import logo from "./BSV_Duesseldorf.jpg";

class MachMit extends React.Component {

  render() {

    return <PageTemplate title="Mach Mit!" subheading="Bei der BSV Düsseldorf">
      <section className="flex-section-1" style={styles}>
        <article>
          <p>
            Wenn du Lust hast, dich zu engagieren, den Schulalltag aller Schüler*innen zu verbessern und politisch aktiv zu werden, bist du bei uns genau richtig. Melde dich einfach bei uns per <NavLink to="/contact">{">"}E-Mail/Instagram{"<"}</NavLink> oder treffe uns auf unseren BDKen (Bezirksdelegiertenkonferenzen), zu denen wir alle Schulen Düsseldorfs einladen.<br/><br/>
            Außerdem treffen wir uns wöchentlich zu öffentlichen Sitzungen, abwechselnd
            am Leipniz Montessori Gymnasium und im Spilles in Benrath
            Wenn du dich also auch außerhalb von BDKen politisch einbringen möchtest, 
            schreibe uns einfach. Alle nötigen Infos schicken wir dir auf Nachfrage.
          </p>
        </article>
        <img src={logo} alt="Das Logo der BSV-Düsseldorf" />
      </section>
    </PageTemplate>
  }

}

export default MachMit;