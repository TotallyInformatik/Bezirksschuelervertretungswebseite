import React from "react";
import PageTemplate from "../Template/boring-page-template";

import "./Kontakt.css";
import maps from "./Screenshot 2022-04-09 160845.jpg";

class Kontakt extends React.Component {

  render() {

    return <PageTemplate title="Kontakt" subheading="So erreicht ihr unsere BSV:">
      <section className="flex-section-2">
        <article>

          <h2>Bezirksschüler*innenvertretung der Landeshauptstadt Düsseldorf</h2>

          <ul>
            <li>Internet: <a href="www.bsv-duesseldorf.de">{">"}www.bsv-duesseldorf.de{"<"}</a></li>
            <li>E-Mail: info@bsv-duesseldorf.de</li>
            <li>Facebook: <a href="https://www.facebook.com/bsvduesseldorf">{">"}facebook.com/bsvduesseldorf{"<"}</a></li>
            <li>Instagram: <a href="https://www.instagram.com/bsv.duesseldorf/">{">"}instagram.com/bsv.duesseldorf</a></li>
            <li>c/o SV Leibniz Montessori Gymnasium</li>
            <li>Scharnhorststraße 8</li>
            <li>40477 Düsseldorf</li>
          </ul>

          <h2>Informationen für Pressevertreter</h2>

          <ul>
            <li>E-Mail: presse@bsv-duesseldorf.de</li>
          </ul>

        </article>
        <a href="https://www.google.com/maps/search/leibniz+gymnasium/@51.2417533,6.7856171,19.21z">
          <img src={maps} alt="Google Maps Darstellung vom Leipniz Gymnasium">
          </img>
        </a>
      </section>
    </PageTemplate>
  }

}

export default Kontakt;