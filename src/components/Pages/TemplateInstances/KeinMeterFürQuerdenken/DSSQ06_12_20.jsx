import React from "react";
import IconButton from "../../../reusables/IconButton/button";
import PostTemplate from "../../Template/page-template";

import thumbnailPic from "./126310535_225383175594436_5190585428344598414_n-850x850.jpg";
import facebookIcon from "./../../../../media/svgs/facebookFeather.svg";

class DSSQ_06_12_20 extends React.Component {

  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.to = this.props.to;
  }

  render() {
    return (
      <PostTemplate 
        title="Rede zur „Kein Meter für Querdenken!“ Kundgebung am 06.12.20"
        thumbnail={thumbnailPic}
        thumbnail_description="Sharepic für die Kundgebung"
        timeOfPublishment="Dezember 6, 2020"
        type={this.type}
        to={this.to}
        color="#477057"
      >

        <p>
        Diese Rede hat ein Mensch aus dem Bezirksvorstand bei der Kundgebung am 06.12.2020 gehalten. An dem Tag hat „Düsseldorf stellt sich quer“ (DSSQ) gemeinsam mit Vertreter*innen des Düsseldorfer Appells, der Kirchen, Gewerkschaften, Künstlerinnen, Krankenhaus-/Pflegebündnissen und uns einen kritischen Fokus auf die aktuelle Corona-Politik gerichtet und sich den Querdenkern, rechten Hools, Reichsbürgern und Antisemiten in den Weg gestellt.
        </p>

        <blockquote>
          Auf den „Querdenken“-Veranstaltungen sehen wir Nazis, Faschist*innen und Antisemit*innen, die mit den berechtigten Ängste und Sorgen der Menschen spielen und sich als „Widerstand“ darstellen.<br/><br/>

          Auch, wenn man sich klar von diesen Gruppen distanzieren muss, gibt es viele Gründe die Coronapolitik der Regierung zu kritisieren.  Nur eben von der richtigen Seite – die Regierung zwingt uns nicht „Masken der Unfreiheit“ zu tragen – sie setzt im Gegenteil mit ihrer Politik des nichts tuns Menschen großer Gefahr aus, sich mit Corona zu Infizieren. Eine Politik, die den Reichen unter die Arme greift und die Mittellosen auf der Strecke lässt. Ich werde heute etwas über die Lage von Schüler*innen in dieser Coronakrise sagen.<br/><br/>

          Ein Schulsystem im Kapitalismus wird immer soziale Ungleichheit reproduzieren, aber während der vollständigen Schulschließung im Frühjahr war dieser Effekt besonders stark zu beobachten. Die Schüler*innen hatten Zuhause unterschiedlichste Voraussetzungen für das Homeschooling. So hatten einige Schüler*innen weder ein Endgerät noch einen ruhigen Raum zum Arbeiten. [Beispiele einfügen?Bezug zu Schulen (Namen nennen) und versch. Beispiele] Sie konnten die gestellten Aufgaben nur schwer bis gar nicht machen und den Unterrichtsthemen nicht folgen.<br/><br/>

          Außerdem ließ sich während der Schulschließung beobachten, dass die psychische Belastung von Schüler*innen enorm Zugenommen hat. Es gab viele Fälle von Vernachlässigung und auch von sexualisierter Gewalt gegenüber Kindern und Jugendlichen.<br/>
          Die Kapazitäten von Lehrpersonen wurden aber nicht dafür eingesetzten offene online Angebote einzurichten, oder online Gesprächstreffen anzubieten, um den Schüler*innen zumindest ein bisschen sozialen Kontakt zu ermöglichen. Die Landesregierung hielt weiter an einem Absurden politischem Kurs fest, der die oberste Priorität hatte, Schüler*innen eine Abschlussnote geben zu können. Dabei wurde keineswegs auf die mentale Belastung geachtet, die eine solche Politik, in einer so besonderen Lage, für viele Schüler*innen bedeutete. Deswegen muss, vor allem in einer so besonderen Lage, das oberste Ziel sein mit einem Schulsystem zu brechen, bei dem an oberster Stelle steht Schüler*innen eine Note aufzudrücken.<br/><br/>

          In der Zwischenzeit sollte das Gebot der Stunde Abstandhalten halten lautet. In Schulen ist das unmöglich. Schüler*innen sitzen, mit bis zu 30 Personen in einem Klassenräumen, der nur schlecht zu Lüften ist und der zu klein ist, um vernünftig Abstand halten zu können. Die Landesregierung unternimmt keine Anstalten diese Situation zu verbessern. Sogar mehr noch. Sie unterbindet Versuche einzelner Städte, die Situation selbst in die Hand zu nehmen. So hat die Landesregierung,der Stadt Solingen verboten, ihr Konzept für die Coronazeit durchzuführen.<br/>
          Die Stadt Solingen wollte ein Konzept einführen, bei dem die Klassen in zwei geteilt wurden. Das würde heißen, dass Schüler*innen nur jeden zweite Woche zur Schule kommen müssten und als Folge daraus Abstand halten könnten. Das RKI empfiehlt dieses Vorgehen übrigens ab einem 7-Tage-Inzidenzwert von über 50. Dieser Wert wurde schon im Oktober stark überschritten.<br/>
          Ein solches Konzept würde aber auch bedeuten, dass einige Schüler*innen nicht zur Schule gehen können. Für einige Eltern würde das heißen, dass sie auf ihre Kinder aufpassen müssten und dadurch nicht arbeiten könnten, was einen Schaden für die Wirtschaft bedeuten würde. Also lehnt die Landesregierung den einzigen Vernünftigen Schulpolitischenkurs ab. Sie zeigt ein weiteres Mal, dass sich das Wohlergehen und die Gesundheit von Schüler*innen und ihrer Angehörigen, der Wirtschaft unterordnen muss.<br/><br/>

          Wir Schüler*innen, die die Folgen eines so gefährlichen Kurses tragen müssen, fühlen sich alleine gelassen und nehmen deshalb, die Verantwortung für ihre Gesundheit und die Schulpolitik selbst in die Hand. Es sind bereits Schüler*innen, aus Essen, aus Mönchengladbach und Bremerhaven,  in den Streik getreten und setzen das Solinger Konzept, das von der Landesregierung verboten wurde, selbst durch.<br/>
          Wir solidarisieren uns mit den streikenden Schüler*innen und fordern die Landesregierung auf, endlich Politik zu machen, die Transparent gegenüber den Schulen ist. Eine Politik, die der selbst Erfüllung von Schüler*innen einen höheren Stellenwert gibt, als der Notengebung. Und Eine Politik, die die Gesundheit schützt und nicht das Marktinteresse.
        </blockquote>

        <IconButton icon={facebookIcon} href="https://www.facebook.com/duesseldorfstelltsichquer/videos/781710676024693/">Die Rede auf FaceBook</IconButton>

      </PostTemplate>
    );
  }

}

export default DSSQ_06_12_20;