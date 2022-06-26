import React from "react";
import PostTemplate from "../../Template/page-template";

import thumbnailPic from "./160309302_286655146173350_3730911114197236186_n-850x850.jpg";

class GlobalerKlimaStreik19_03_21 extends React.Component {

  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.to = this.props.to;
  }

  render() {
    return (
      <PostTemplate 
        title="Rede zum globalen Klimastreik am 19.03.21"
        thumbnail={thumbnailPic}
        thumbnail_description="Sharepic für den globalen Klimastreik"
        timeOfPublishment="März 21, 2021"
        type={this.type}
        to={this.to}
        color="#6E012F"
      >

        <p>
          Diese Rede hat ein Mensch aus dem Bezirksvorstand bei der Kundgebung zum Globalen Klimastreik am 19.03.21 in Düsseldorf gehalten:
        </p>

        <blockquote>
          Die Klimakrise schreitet immer weiter voran und überall auf der Welt erleben Menschen die ersten Folgen. Auch wir haben im letzten Jahr zum ersten mal die Folgen des Klimawandels am eigenen Leib erfahren. Die Corona-Pandemie ist nicht nur eine Gesundheitskrise, es ist Teil der Klimakrise, die durch den Kapitalismus ausgelöst wurde, und immer weiter vorangetrieben wird. Unternehmen werden dafür belohnt, wenn diese Wälder Abholzen und dadurch Tieren ihren natürlichen Lebensraum wegnehmen. Auf der gerodeten Fläche wird dann Soja angepflanzt, welches an Tiere in Massentierhaltungen verfüttert wird, die für unseren extrem hohen Fleischkonsum hinhalten müssen. Ein Wirtschaftssystem, das kurzfristige Profite über die Gesundheit des Planeten stellt,schadet sowohl Mensch als auch Tier. <br/><br/>
          Wir können beobachten, dass das kapitalistische Wirtschaftssystem auch nicht dazu in der Lage war und es auch zukünftig nicht sein wird, diese Gesundheitskrisen erfolgreich einzudämmen. Während das Sozialleben der Menschen heruntergefahren wird, müssen Arbeiter*innen weiter Tag für Tag in die Betriebe fahren, denn ansonsten stehen sie in unserem “solidarischen” Sozialstaat mit ihren Geldnöten, wie üblich, allein dar. Am Ende fließen die Gelder der Pandemiehilfen vor allem in die Taschen der Besitzenden. Kurzarbeitergeld lässt die einen um ihre Existenz sorgen, den anderen erspart es eine Menge Lohnkosten. Der Staat hilft den Reichen immer reicher zu werden und zwingt Menschen gleichzeitig immer weiter in die Armut.<br/>
          Auch in der Schule zeigte sich, vor allem in so einer besonderen Situation, die volle Härte des Kapitalismus. So werden Schüler*innen trotz der hohen Gesundheitlichen Gefahr weiterhin zur Schule gedrängt, damit die Eltern möglichst bald wieder ungestört zur Arbeit können um für die Profite anderer zu schuften. Versuche von Dortmund oder Duisburg, die Schulen auf eigene Faust wieder zu schließen, oder ein ernsthaftes Hygienekonzept durchzuführen, wurden von unser Landesregierung zerschlagen. Nur ab einer 100er Inzidenz sollen die Schulen schließen dürfen, also dann, wenn das Virus sich schon an den Schulen verbreitet hat!<br/>
          Dabei sieht man im Handeln der Landesregierung wieder einmal klar, worin die Prioritäten der Schulpolitik wirklich liegen. Das oberste Ziel dieser bleibt es weiterhin Individuen zu nützlichen Arbeitskräften auszubilden. Abschlussprüfungen werden durchgeboxt, koste es was es wolle. Persönlichkeitsentwicklung und Selbstfindung bleiben dabei wie immer auf der Strecke.<br/>
          Vor allem in der Lage einer solchen Pandemie, in der es keinen Sozialen Kontakt geben darf, sollte aber genau das der Fokus von Schulen sein. Stattdessen versucht das Schulministerium die Schüler*innen auf biegen und brechen zu benoten, ohne dabei auf deren physische und psychische Gesundheit zu achten. So berichten viele Schüler*innen, dass sie Angst haben in die Schule zu gehen, oder mit dem Leistungsdruck nicht klarkommen.<br/><br/>

          Vor allem das aktuelle Schuljahr steht unter dem Motto “wer nicht mitkommt ist selber schuld”. Genau diese Haltung stellt viele Schüler*innen vor Zukunftsängste, mit denen sie allein gelassen werden, denn Unterricht zur Zeit, egal ob in Präsenz oder in Distanz, ist weder gesundheitlich zumutbar noch zielführend. Die Schüler*innen hatten Zuhause unterschiedlichste Voraussetzungen für das Distanzlernen. Einige hatten weder einen ruhigen Raum, in dem sie arbeiten konnten, andere hatten kein Internet um an den online Lernangeboten teilzunehmen und der Umfang, in dem die Familie das Homeschooling unterschützen konnte variierte drastisch von Schüler*inn zu Schüler*inn. Dadurch verschärfen sich die Soziale Ungleichheit und Chancenungleichheit noch stärker als sie es sonst schon tun.<br/>
          Lehrer*innen stehen vor der gewaltigen Aufgabe, entgegen der Systematik unseres Schulsystems, Schüler*innen zu mündigen Mitmenschen zu machen. Dieser Aufgabe können sie, besonders in Zeiten des aktuellen Ausnahmezustands, nicht gewachsen sein.<br/>
          Immer wieder sehen wir wie in unserem bestehenden Schulsystem bei Schüler*innen große Unsicherheiten entfacht werden, denn die Schuld für schulische Misserfolge wird alleine den Schüler*innen gegeben. Dies ist nur ein weiterer Faktor, der die seelische Gesundheit der betroffenen angreift und für Stress innerhalb und außerhalb der Schule sorgt.<br/><br/>

          Lasst uns deshalb zusammen Kämpfen für ein System, das Mensch und Natur nicht für bloße Profite ausbeutet! Ein System, in dem die physische und psychische Gesundheit an erster Stelle steht und in dem sich die Selbstverwirklichung des Einzelnen [.. .] [nicht] den wirtschaftlichen Interessen weniger unterordnen muss. Dieses Ziel können wir letztlich nur in Solidarität mit den Arbeiter*innen erreichen, und zwar in dem wir gemeinsam auf die Straße gehen und zusammen für ein gesünderes System kämpfen, sowohl für Mensch, Tier als auch die Natur an sich. Dankeschön.<br/><br/>
        </blockquote>

      </PostTemplate>
    );
  }

}

export default GlobalerKlimaStreik19_03_21;