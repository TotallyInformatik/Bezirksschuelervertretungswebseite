import React from "react";
import PostTemplate from "../../Template/page-template";
import thumbnailPic from "./noah-syedKPtMEFo-unsplash.jpg";


class LetzterSchultag2022 extends React.Component {

  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.to = this.props.to;
  }

  render() {
    return (
      <PostTemplate 
        title="Der Letzte Schultag 2022"
        timeOfPublishment="Juni 24, 2022"
        thumbnail={thumbnailPic}
        thumbnail_description="Masken. Sehr. Viele. Masken."
        type={this.type}
        to={this.to}
        color="#819DAA"
      >

        <p>
          Heute ist für alle Schüler*innen in NRW der letzte Schultag. 
        </p>
        <p>
          Die Ferien kommen und wir blicken zurück auf ein holpriges Jahr nach der Pandemie. Für die meisten Schüler*innen war der Schulalltag nach dem digitalen Unterricht ein wichtiger Start in einen sichereren Alltag mit chancengleicherer Bildung. 
        </p>
        <p>
          Doch die Verunsicherung und die Angst vor Infektion blieb. Nicht alle Schüler*innen hatten im Distanzunterricht die selben Ressourcen und somit war vielen das Lernen erschwert. Auch die politische Teilhabe bei Schüler*innenstreiks war in einer Pandemie genauso wie SV Arbeit und das Zusammenkommen von Schüler*innen erschwert. Der Kampf für Mündigkeit und gleiche Chancen bleibt weiterhin bestehen. 
        </p>
        <p>
          Wir als BSV Düsseldorf freuen uns, dass wir unsere Arbeit und BDKen dieses Jahr endlich wieder stattfinden lassen konnten und freuen uns auf das nächste Jahr.
          Wir treffen uns am 09.08. zur ersten BeVoSi nach den Ferien und freuen uns über Zuwachs. Schreibt uns gerne eine Nachricht für den Standort des Treffens.
        </p>
        <p>
          Schöne Ferien und eine erholsame Zeit wünscht euch die BSV Düsseldorf!
        </p>

      </PostTemplate>
    );
  }

}

export default LetzterSchultag2022;