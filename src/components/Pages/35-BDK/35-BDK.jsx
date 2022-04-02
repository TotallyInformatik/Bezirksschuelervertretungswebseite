import React from "react";
import PageTemplate from "../Template/page-template";
import IconButton from "../../reusables/IconButton/button";

import "./35-BDK.css";

import bdkThumbnail from "./../../../media/images/Sharepic-35-BDK-850x850.png";
import downloadButton from "./../../../media/svgs/file_download_white_24dp.svg";
import invitationDocument from "./../../../media/documents/Einladung-35.-BDK.pdf";

class BDK35 extends React.Component {

  render() {
    return (
      <PageTemplate 
        title="Einladung zur 35. Bezirksdelegiertenkonferenz"
        thumbnail={bdkThumbnail}
        thumbnail_description="Sharepic für die Einladung zur 35. BDK"
        timeOfPublishment="Januar 11, 2022"
      >
        <p>
          Die 35. BDK der BSV Düsseldorf steht an.
        </p>

        <p>
          Sie findet am 20.01.22 in der Aula des <a href="https://www.google.com/maps/search/leibniz+gymnasium/@51.2417533,6.7856171,19.21z">Leibniz Gymnasiums</a> statt.
        </p>

        <p>
          Unten findet ihr die Einladung und das Protokoll der letzten BDK.
        </p>

        

        <IconButton icon={downloadButton} download={invitationDocument}>
          Einladung 35. BDK
        </IconButton>

        <IconButton icon={downloadButton} download={invitationDocument}>
          Protokoll der 34. BDK
        </IconButton>

      </PageTemplate>
    );
  }

}

export default BDK35;