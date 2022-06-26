import React from "react";
import PostTemplate from "../../Template/page-template";

import thumbnailPic from "./167667838_234765408429645_5699080646736834876_n-850x850.jpg";

class ZeroCovid extends React.Component {

  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.to = this.props.to;
  }

  render() {
    return (
      <PostTemplate 
        title="Rede zum ZeroCovid-Aktionstag am 10.04.21"
        thumbnail={thumbnailPic}
        thumbnail_description="Sharepic für die Einladung zur ZeroCovid-Aktionstag"
        timeOfPublishment="April 13, 2021"
        type={this.type}
        to={this.to}
      >

        <p>
          Diese Rede hat ein Mensch aus dem Bezirksvorstand zum ZeroCovid-Aktionstag am 10.04.21 in Düsseldorf gehalten:
        </p>

        <blockquote>
          Auf den „Querdenken“-Veranstaltungen sehen wir Nazis und Faschist*innen, die mit den berechtigten Ängsten und Sorgen der Menschen spielen und sich als „Widerstand“ darstellen. Auch, wenn man sich klar von diesen Gruppen distanzieren muss, gibt es viele gute Gründe die Coronapolitik der Regierung zu kritisieren. Nur eben von der richtigen Seite – die Regierung zwingt uns nicht „Masken der Unfreiheit“ zu tragen – sie setzt im Gegenteil mit ihrer Politik des nichtstuns Menschen großer Gefahr aus, sich mit Corona zu Infizieren. Eine Politik, die den Reichen unter die Arme greift und die Mittellosen auf der Strecke lässt. Ich werde heute etwas über die Lage von Schüler*innen in der Coronakrise sagen. <br /><br />
          Ein Schulsystem im Kapitalismus wird immer soziale Ungleichheit reproduzieren, aber während
          der lang andauernden Schulschließung ist dieser Effekt besonders stark zu beobachten. Die
          Schüler*innen haben Zuhause unterschiedlichste Voraussetzungen für das Homeschooling. So haben einige Schüler*innen nur sehr schleppend passende Endgeräte erhalten und Angebote
          für einen ruhigen Raum zum Arbeiten gibt es nur wenige. Sie können die gestellten Aufgaben
          nur schwer bis gar nicht erledigen und den Unterrichtsthemen dementsprechend nicht folgen.
          Nach über einem Jahr Pandemie hinkt Deutschland beim Thema Digitalisierung immer noch
          gewaltig hinterher. Es fehlt der akkurate Umgang mit geeigneten Tools, Serverkapazitäten von
          Plattformen sind oft zu klein und Internetverbindungen brechen regelmäßig ab. Die
          Rahmenbedingungen variieren von Schule zu Schule, von Stadt zu Stadt und von Land zu
          Land. Mehr als Maske tragen, Abstand halten und lüften fällt den Regierenden nicht ein?
          Vorschläge von Experten*innen, Lehrer*innen-, Schüler*innen- und Eltern Verbänden werden nicht ernst genommen und genügend Geld ist angeblich auch nicht da. Handelt jemand doch auf eigene faust, hagelt es Abmahnungen oder Kritik. Ähnlich ging es dem OB von Dortmund, der die dritte Welle schon anrollen sah und es für zu gefährlich hielt die Schüler*innen noch kurz
          vor den Ferien in den Unterricht zu schicken. Ausgerechnet Laschet wirft ihm vor, dass ihm
          nichts besseres einfallen würde, als die Schulen zu schließen. <br/><br />
          Erst hieß es, dass Schulen ab einen Inzidenz Wert von 100 geschlossen werden, nun wurde der
          Wert vor kurzem auf 200 erhöht, sofern es keine zweiwöchigen Testmöglichkeiten gäbe. Die
          Strategie zur Selbsttestung muss auch weiter kritische hinterfragt werden. Schüler*innen dürfen sich nur 2-Mal die Woche testen, wobei mehr Test nötig wären, um Infektionen wirklich einschränken zu können. Aus Sicht des Infektionsschutzes ist es nicht Sinnvoll, dass sich alle Schüler*innen gleichzeitig im selben Raum testen und dafür ihre Masken absetzten müssen.
          Davon abgesehen, dass es immer noch zu Lieferproblemen kommt, kann weder die korrekte
          Ausführung noch die Anonymität der Ergebnisse von den Tests garantiert werden. <br/><br />
          Die Kapazitäten von Lehrpersonen werden nicht dafür eingesetzt oder aufgestockt, um offene
          online Angebote einzurichten, oder online Gesprächstreffen anzubieten, um den Schüler*innen zumindest ein bisschen sozialen Kontakt zu ermöglichen. Die Landesregierung hält weiter an einem Absurden politischen Kurs fest, der die oberste Priorität hat, Schüler*innen eine Noten zu
          geben. Dabei wird keineswegs auf die mentale Belastung geachtet, die eine solche Politik, in
          einer so besonderen Lage, für viele Schüler*innen bedeutet. Deswegen muss, vor allem jetzt, das oberste Ziel sein, mit einem Schulsystem zu brechen, bei dem an oberster Stelle steht, Schüler*innen eine Note aufzudrücken. <br/><br />
          Noten sind auch außerhalb von Corona keine Objektive Möglichkeit Schüler*innen zu vergleichen. Sie sind immer Subjektiv und haben kaum Aussagekraft. Aber besonders in der jetzigen Situation, in der Schulen unterschiedlichste Regeln und Konzepte haben, bieten Noten keine Basis mehr um Schülerinnen und Schüler zu bewerten oder Abschlüsse zu vergeben. Die ungleichen Voraussetzungen von Schüler*innen sind drastisch verschlimmert worden. <br/><br />
          Deswegen fordern wir die Landesregierung auf, endlich Politik zu machen, die Transparent
          gegenüber den Schulen ist. Eine Politik, die der selbst Erfüllung von Schüler*innen einen
          höheren Stellenwert gibt, als der Notengebung. Und Eine Politik, die die Gesundheit schützt und
          nicht das Marktinteresse.
        </blockquote>

      </PostTemplate>
    );
  }

}

export default ZeroCovid;