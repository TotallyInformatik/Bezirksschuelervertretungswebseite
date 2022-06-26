import React from "react";
import IconButton from "../../../reusables/IconButton/button";
import PostTemplate from "../../Template/page-template";

import downloadButton from "./../../../../media/svgs/file_download_white_24dp.svg";
import arbeitsprogrammDocument from "./APO-20_21-BSV_Ddorf.pdf";

class Arbeitsprogramm2020_21 extends React.Component {

  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.to = this.props.to;
  }

  render() {
    return (
      <PostTemplate 
        title="Arbeitsprogramm 2020/21"
        timeOfPublishment="Oktober 28, 2020"
        type={this.type}
        to={this.to}
      >

        <p>
          Das ist das Arbeitsprogramm der BSV Düsseldorf in der am 28.10.20 von der 33. BDK beschlossenen Fassung:
        </p>

        <blockquote>
          Es ist die Aufgabe des Bezirksvorstandes, darüber zu entscheiden, wie die BSV Düsseldorf zwischen den BDKen handelt und welche Konkreten Meinungen sie vertritt. Den Inhaltlichen Rahmen und die grundsätzlichen Werte dafür gibt die BDK in diesem Arbeitsprogramm vor.

          Im Kapitalismus hat die Schule die Funktion Individuen zu nützlich Arbeitskräften auszubilden. Dafür werden Schüler*innen Werte wie Pünktlichkeit und Disziplin vermittelt, welche de facto höher als politische Teilhabe und Mündigkeit gestellt werden. Das dreigliedrige Schulsystem und die Bewertung durch Noten dienen dabei der Reproduktion von sozialer Spaltung und der Entwicklung von Konkurrenzdenken. Die Selbstverwirklichung des Einzelnen muss sich den wirtschaftlichen Interessen weniger unterordnen. Es wird nach gut ausgebildeten Lohnarbeiter*innen verlangt und nicht nach mündigen Mitgliedern der Gesellschaft. Das Schulsystem reproduziert daher die Chancenungleichheit und Diskriminierung des Kapitalismus selbst. Dabei wird jede*r diskriminiert, die*der nicht den Leistungsanforderungen des Systems entspricht, sei es aufgrund von körperlichen oder geistigen Einschränkungen oder, weil das Elternhaus bei der Bildung nicht unterstützen kann. Das Arbeiter*innen Kind wir meist zum*zur Arbeiter*in und das Akademiker*innen Kind wird meist zum*zur Akademiker*in.<br/><br/>

          Auch wenn diese Probleme seit längerer Zeit bestehen, ist es trotzdem die Aufgabe der BSV Düsseldorf für eine Schule zu kämpfen, in der diese Probleme möglichst minimiert werden. Ein Konzept dafür ist die Integrative-Ganztags-Gesamtschule (IGGS). Eine Schule, in der Inklusion gelebt wird, weil Schüler*innen mit Behinderungen und Schüler*innen ohne Behinderungen nicht mehr räumlich getrennt sind. Eine Schule, die sich aktive für Antisexismus einsetzt und ein Umfeld bietet in dem Frauen und LGBTQ+ Mitglieder sich unabhängig von gesellschaftlichen Rollenbildern entfalten können. Genauer gesagt, wird in einer solchen Schule das Aufbrechen von Geschlechterrollen gefördert und eine Schule gestaltet, in der zum Beispiel Frauen, das Interesse, oder Können eines naturwissenschaftlichen Faches nicht abgesprochen wird, in dem ihnen zugemutet wird als emotional zu sein und hübsch zu schreiben. Erst wenn Inklusion in den Schulen stattfindet, kann auch Inklusion in der Gesellschaft gelingen.<br/><br/>

          Auch die Chancenungleichheit, die es zwangsläufig im Kapitalismus gibt, würde durch eine IGGS verringert, wenn auch nicht aufgehoben werden. Eine Gesamtschule würde dafür sorgen, dass die Bildung der Schüler*innen weniger vom kulturellen und ökonomischen Kapital der Eltern abhängig ist. Außerdem würde eine Ganztagsschule dafür sorgen, dass nicht am Ende der vierten Klasse entschieden wird, welches Schicksal einen ereilt. Dass alles kann aber nur in einer Schule funktionieren, in der Schüler*innen wirklich demokratisch in die Entscheidungsprozesse mit eingebunden werden und Schüler*innenbeteiligung mehr als nur ein Lippenbekenntnis ist.<br/><br/>

          Am 28.09.2020 wurde in Düsseldorf mit Stephan Keller ein CDUler zum Oberbürgermeister gewählt. Auch wenn die SPD unter Thomas Geisel nicht ernsthafte Politik für eine gerechtere Schule gemacht hat, ist diese Wahl besonders im Kampf um eine fairere Schule kein Fortschritt, weil die CDU sich auch schon in der Vergangenheit stark gegen Gesamtschulen gemacht hat. Umso wichtiger ist es jetzt als BSV Düsseldorf den Forderungen nach dem Bau von Gesamtschulen, dem Ruf nach einer gerechteren Schule und einem gerechterem System Nachdruck zu verleihen.<br/>
          In den letzten zwei Jahren hat die Fridays for Future Bewegung gezeigt, dass Schüler*innen Streiken können und, dass Schüler*innen Streiks ein wichtiges Mittel sind, um sich Gehör zu verschaffen. Deswegen ist es vor allem bei einem so wichtigen Thema wie bei den Forderungen nach einem gerechteren Schulsystem notwendig zu Streiken. Mit den Wahlen ist der Entscheidungsprozess nicht zu ende. Der Kampf geht auf den Straßen weiter.<br/><br/>

          Die bekannten Hürden wurden durch die Coronapandemie nur noch sichtbarer. Eine Pandemie, die sich nur durch den weltweit globalisierten Kapitalismus so schnell verbreiten konnte. Die wirtschaftlichen Folgen dieser Coronakrise wurden wieder einmal, wie schon so häufig in Wirtschaftskrisen, auf den Rücken der Arbeiter*innen ausgetragen. Während Beschäftigte in Kurzarbeit häufig mit nur 60% ihres sonstigen Lohns auskommen mussten, wurden die reichsten Menschen auch in der Coronakrise immer reicher. Corona hat aber nicht nur großen Einfluss auf die Arbeitswelt, sondern auch in der Schule waren und sind die Folgen von Corona verheerend.<br/>
          Viele Schüler*innen aus sozial benachteiligten Familien hatten während des Lockdowns zum Beispiel keinen ruhigen Raum, in dem sie arbeiten konnten oder keine Angemessene technische Ausstattung, um mit den Schulen in Kontakt treten zu können. Dadurch wurde die Chancenungleichheit, die Kinder in schwierigen Familienverhältnissen oder aus sozial benachteiligten Familien trifft, nur noch extremer. Außerdem berichteten viele Schüler*innen von Psychischen Problemen, während des Lockdowns.<br/>
          Aber anstatt die Sorgen und Probleme ernst zu nehmen sorgt die CDU/FDP Landesregierung jetzt dafür, dass diesen Anliegen im Falle eines 2. Lockdowns nur noch mehr Ignoranz entgegen gebracht werden, indem angekündigt wurde, dass der Unterricht von Zuhause aus auch benotet werden soll. Dadurch zeigt die Landesregierung, dass sie sich nicht um die Physische und Psychische Gesundheit der Schüler*innen sorgt.<br/><br/>

          Schule existiert nicht in einem Vakuum, welches abgeschottet vom Rest der Gesellschaft steht. Deswegen kann eine Schule in einem Kapitalistischen System niemals alle angesprochenen Hindernisse überkommen.<br/>
          Dennoch setzt sich die BSV Düsseldorf in der Legislaturperiode 2020/2021 für eine Schule ein, in der Inklusion gelingen kann, also eine Schule, in der alle Schüler*innen zusammen, unabhängig davon, wie viel der*die einzelne leisten kann, lernen. Eine Schule, in der Schüler*innen nicht mehr aufgrund von körperlichen oder geistigen Einschränkungen diskriminiert werden und eine Schule, in der die soziale Herkunft nicht mehr für den Bildungserfolg bestimmend ist.<br/>
        </blockquote>

        <IconButton icon={downloadButton} href={arbeitsprogrammDocument}>PDF-Datei</IconButton>

      </PostTemplate>
    );
  }

}

export default Arbeitsprogramm2020_21;