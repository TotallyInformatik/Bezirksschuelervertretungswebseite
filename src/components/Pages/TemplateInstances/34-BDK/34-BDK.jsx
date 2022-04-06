import React from "react";
import PageTemplate from "./../../Template/page-template";
import IconButton from "./../../../reusables/IconButton/button";

import "./34-BDK.css";

import bdkThumbnail from "./Sharepic-BDK-850x850.jpg";
import downloadButton from "./../../../../media/svgs/file_download_white_24dp.svg";
import invitationDocument from "./Allgemeine-Einladung-zur-34-BDK.pdf";
import protocollDocument from "./Protokoll-der-33.-BDK-geschwaerzt.pdf";

class BDK34 extends React.Component {

  constructor(props) {
    super(props);
    this.type = this.props.type;
  }

  render() {
    return (
      <PageTemplate 
        title="Einladung zur 34. Bezirksdelegiertenkonferenz"
        thumbnail={bdkThumbnail}
        thumbnail_description="Sharepic für die Einladung zur 34. BDK"
        timeOfPublishment="Oktober 11, 2021"
        type={this.type}
        to="/34-bdk"
      >
        <p>
          Die 34. BDK der BSV Düsseldorf steht an.
        </p>

        <p>
          Sie findet am 04.11.21 am <a href="https://www.google.com/maps/search/leibniz+gymnasium/@51.2417533,6.7856171,19.21z">Leibniz Gymnasium</a> statt.
        </p>

        <p>
          Unten findet ihr die Einladung und das Protokoll der letzten BDK.
        </p>

        

        <IconButton icon={downloadButton} href={invitationDocument}>
          Einladung 34. BDK
        </IconButton>

        <IconButton icon={downloadButton} href={protocollDocument}>
          Protokoll der 33. BDK
        </IconButton>

      </PageTemplate>
    );
  }

}

export default BDK34;