import React from "react";
import PostTemplate from "../../Template/page-template";

import img1 from "./IMG_20210419_233831_903.jpg";
import img2 from "./IMG_20210419_233836_532.jpg";

import "./AktionsTagGerechteBildung.css";

class AktionsTagGerechteBildung extends React.Component {

  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.to = this.props.to;
  }

  render() {
    return (
      <PostTemplate 
        title="Aktionstag für gerechte Bildung Düsseldorf 23.04.21"
        thumbnail={img1}
        thumbnail_description="Sharepic für den Aktionstag für gerechte Bildung in Düsseldorf"
        timeOfPublishment="April 20, 2021"
        type={this.type}
        to={this.to}
        color="#6680AD"
      >
        <p>
        Unser Bildungssystem wurde jahrelang unterfinanziert. Die Isolation im Lockdown, der ständig wachsende Leistungsdruck und die damit verbundenen riesigen Erwartungen an uns machen vielen sehr zu schaffen. Der ohnehin schon enorm hohe Druck bei Prüfungen ohne Corona wird durch die Isolation und den mangelnden Austausch nochmal verstärkt. Prüfungen sind immer eine Art von Auslese, um uns für den Arbeitsmarkt selektieren. Der Druck bei Prüfungen ist gewollt, denn dadurch kann für Arbeitgeber klargestellt werden, wer eigentlich belastbar ist. Schule allgemein hat also nicht die Funktion, uns auf das Leben vorzubereiten, sondern uns als Arbeitskräfte für den Profit von Banken und Konzernen auszubilden. Ob mit oder ohne Corona, der Geldbeutel bestimmt die Bildung aber auch die Leistungen, die bei Prüfungen erbracht werden können. Denn wer gut lernen will, muss auch finanziell gut dastehen. Die Chance, die Prüfungen einigermaßen gut hinzubekommen, ist durch Corona dem Großteil der SchülerInnen verwehrt. Gerade für unsere Zukunft sind das beschissene Aussichten, denn mit einer schlechten Prüfung sinken auch unsere Chancen, einen Job zu bekommen oder sich für einen höheren Abschluss zu qualifizieren.
        </p>

        <p>
        Trefft uns deshalb diesen Freitag um 16 Uhr an der Rheinuferpromenade/ Höhe Bäckerstraße. Dort wollen wir mit Kreide, Redebeiträgen und Plakaten zeigen was wir von der Schulpolitik der Regierung halten!
        </p>

        <p>
          #stopptdieprüfungen <br/>
          #fürgerechtebildung <br/>
          #diesessystemmachtunskrank
        </p>

        <section className="image-section">
          <img src={img1} alt="Sharepic 1 für den Aktionstag für gerechte Bildung"></img>
          <img src={img2} alt="Sharepic 2 für den Aktionstag für gerechte Bildung"></img>
        </section>


      </PostTemplate>
    );
  }

}

export default AktionsTagGerechteBildung;