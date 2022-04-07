import React from "react";
import PageTemplate from "../../Template/page-template";

class ResolutionWirtschaftAlsFach extends React.Component {

  constructor(props) {
    super(props);
    this.type = this.props.type;
  }

  render() {
    return (
      <PageTemplate 
        title="Resolution Wirtschaft als Fach"
        timeOfPublishment="Februar 4, 2018"
        type={this.type}
        to="/wirtschaft-als-fach"
      >

        <p>
          Brot und Rosen statt dornigen Chancen! – Gegen Wirtschaft als Pflichtfach
          Wir sprechen uns gegen die geplante Einführung des Pflichtfaches Wirtschaft aus. Wir
          fordern, dass die Schule mehr ist als ein Ort, der uns auf den Arbeitsmarkt vorbereitet, um für
          die Wirtschaft nützlich zu sein. Die Schule soll, unserer Ansicht nach auch ein Ort sein, an
          dem wir die Welt hinterfragen können und uns unsere eigene Meinung bilden können. Was
          die Probleme in dieser Welt sind, wo diese herkommen und wie man sie verbessern kann. Die
          Pläne der neuen Landesregierung laufen aber darauf hinaus, Wirtschaft als eine Ansammlung
          von spannenden Chancen darzustellen, die man nur ergreifen muss – und wer das nicht
          schafft, der hat es eben nicht genug gewollt und damit nicht verdient. So ein Denken den
          Schülern beizubringen halten wir für grundsätzlich falsch!<br /><br />
          Die deutsche Wirtschaft produziert große soziale Ungleichheit zwischen den Menschen:
          Extremen Wohlstand auf der einen Seite, der von Jahr zu Jahr anwächst und über
          Generationen weitergegeben wird, auf der anderen Seite Menschen, die trotz täglicher
          körperlich und seelisch zerstörerischer Arbeit von Lohn am Existenzminimum leben müssen.
          Es gibt folglich keine Chancengleichheit in unserem Wirtschaftssystem, nicht jeder kann alles
          schaffen oder werden, so wie manche neoliberalen Politiker behaupten mögen. Das
          kapitalistische Wirtschaftssystem baut darauf auf, dass manche das Kapital besitzen und es
          vermehren und andere für diese Kapitalbesitzende ihre Arbeitskraft verkaufen, was bei
          niedrigen Löhnen für die einen und niedrigen Steuern für die anderen, zu einem System der
          Ungerechtigkeit und Ungleichheit führt. Folglich ist die kapitalistische Wirtschaft
          Deutschlands, nichts was wir der Jugend beibringen sollten.<br /><br />
          Unserer Meinung nach sollte die Bildung im Vordergrund stehen und nicht die Ausbildung.
          Anstatt das kapitalistische Wirtschaftssystem gelehrt zu bekommen, um später möglichst
          wirtschaftlich zu handeln, sollten die Schüler darüber nachdenken, wie man die großen
          sozialen und internationalen Probleme angeht. Wir sollten lernen, wie wir zusammen an der
          Zukunft arbeiten, statt den Wettbewerb schon in der Schule zu etablieren. Wir sollten uns ein
          eigenes Bild über das Wirtschaftssystem machen können. Ganz im Gegenteil fordern wir
          deshalb eine wissenschaftlich-kritische Beäugung des Wirtschaftssystems, denn das kommt
          momentan im Fach Sozialwissenschaften noch zu kurz. Man sollte das Fach der
          Sozialwissenschaften reformieren, es auf einen kritischeren und sozialeren Schwerpunkt
          bringen.<br /><br />
          Ein Fach Wirtschaft, dass der Jugend das neoliberale kapitalistische Wirtschaftssystem
          verpflichtend nahe bringen soll, das lehnen wir, als Interessenvertretung der Schüler
          entschieden ab!<br /><br />
          Wir wollen solidarisch miteinander lernen und leben.
        </p>

      </PageTemplate>
    );
  }

}

export default ResolutionWirtschaftAlsFach;