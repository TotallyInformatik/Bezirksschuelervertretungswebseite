import React from "react";
import PostTemplate from "../../Template/page-template";

import thumbnail from "./lgbtq.png";

class ResolutionLGBTQ extends React.Component {

  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.to = this.props.to;
  }

  render() {
    return (
      <PostTemplate 
        title="Resolution LGBTQ+"
        timeOfPublishment="Dezember 12, 2017"
        thumbnail_description="Die LGBTQ Flagge"
        thumbnail={thumbnail}
        type={this.type}
        to={this.to}
      >

        <p>
          Dies ist unsere durch die BDK legitimierte Resolution zum Thema LGBTQ+.<br/><br/>

          <b>Nein zur Diskriminierung von Schwulen, Lesben, Trans- und Queermenschen in Gesellschaft und Schule! Für eine Schule des Vertrauens als Lebens- und Schutzraum! Gegen eine Zerstörung des Sexualkundeunterrichts!</b><br/><br/>

          Schule ist Lebensraum. Sie ist auch ein Schutzraum außerhalb der eigenen Familie und dem sonstigen Umfeld, der für die Entwicklung der eigenen Persönlichkeit, Individualität und Lebensweise Anregungen, konstruktive Reibungsflächen vor allem aber Schutz und Sicherheit bieten muss. Das gilt umso mehr für Schüler*innen, denen dieser Raum in ihrer häuslichen Umgebung verwehrt oder vorenthalten wird.<br/><br/>

          Ein besonderes Bedürfnis nach einem solchen Schutzraum Schule haben Schülerinnen und Schüler, die den gesellschaftlich heterosexuellen Normen in Sachen Sexualität und Geschlechtsidentität nicht oder nur teilweise entsprechen. Die gegenwärtige Schule aber ist oft noch sehr weit von diesem Ideal entfernt. Auch in der Schule haben Schwule, Lesben und Transmenschen immer noch mit Ausgrenzung, Diskriminierung und Mobbing zu tun. „Schwul“ gilt als Schimpfwort und ein heterosexuelles und oft stark klischeebeladenes Männer- und Frauenbild findet sich in Schulbüchern und Äußerungen von Mitschüler*innen und Lehrer*innen wieder. Ehe und Familie als anzustrebende Lebensziele stehen neben „Karriere“ und „Erfolg“ immer noch auf dem „heimlichen Lehrplan“. Schwule oder lesbische Partnerschaften, alternativsexuelles oder polyamores Leben finden in der Schule keine oder kaum Gesprächsraum. Aufklärung über solche „andersartigen“ Lebensentwürfe findet auch im Biologieunterricht der Sekundarstufe meist keinen Platz, falls nicht sehr engagierte Lehrerinnen und Lehrer dies tun. Die Stimmen von Schüler*innen, die sich selbst als schwul, lesbisch, bisexuell oder queer sehen oder die das Gefühl haben im falschen Körper gefangen zu sein (LGBTQ* Gemeinschaft), werden im Schulalltag oft nicht gehört, werden belächelt oder sogar schlichtweg ignoriert. Auch im Politk- oder Sozialwissenschaftsunterricht wird kaum über Wege und Mittel gesprochen, die in Politikerreden und Schulprogrammen geforderte Toleranz und Individualität im Schulrahmen umzusetzen. Diese, sowie weitere externe Faktoren, führen zu einer Depressions- und Suizidrate bei LGBTQ*-Menschen, die die Depressions- und Suizidraten mit heteronormer Identität um ein vielfaches übersteigt.<br/><br/>

          Die BSV Düsseldorf, als Vertreterin der Interessen aller Düsseldorfer Schüler*innen, hat sich auf ihre Fahnen geschrieben, sich für die Belange unserer Mitschüler*innen einzusetzen. Da Schule nicht im luftleeren Raum existiert, sondern mitten in der Gesellschaft mit ihren Rollenbildern und Vorurteilen einerseits, Interessen und Ideologien andererseits sieht es die BSV als ihre Aufgabe ausgehend von dem gesetzlichen Bildungsziel der Erziehung zum kritischen, aktiven und mündig-demokratischen Menschen auch in die gesellschaftliche Diskussion einzugreifen und homophoben und reaktionären Geschlechter- und Familienbildern entgegenzutreten. Denn wenn sich reaktionäre Lügen wie die Bezeichnung von Homosexualität als Krankheit, Familie als rein heterosexuelle Fortpflanzungsgemeinschaft oder Transsexualität als Abartigkeit gesellschaftlich durchsetzen, werden sie auch in der Schule stärker und finden Eingang in Lehrpläne, wie es die Entwicklung z.B. in den USA, Russlands oder einigen Ländern des Nahen Ostens zeigt. Dort wird der Sexualkundeunterricht gekürzt oder gar nicht erst eingeführt, sodass – auch heterosexuellen – Jugendlichen das Recht auf eine freie Sexualität verwehrt oder bestritten wird. Der Bezirksvorstand hat sich in diesem Sinne im vergangenen Jahr beispielsweise deutlich gegen den sogenannten „Bus der Meinungsfreiheit“ ausgesprochen und sich am Protest gegen diese christlich-reaktionäre Gruppe von Gegnern gleicher Rechte für Schwule und Lesben beteiligt.<br/><br/>
        </p>

      </PostTemplate>
    );
  }

}

export default ResolutionLGBTQ;