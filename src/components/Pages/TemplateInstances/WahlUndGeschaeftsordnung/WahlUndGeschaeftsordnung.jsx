import React from "react";
import IconButton from "../../../reusables/IconButton/button";
import PostTemplate from "../../Template/page-template";

import pdf from "./Wahl-und-Geschaeftsordnung-BSV-Duesseldorf-23.03.2017.pdf";
import downloadIcon from "./../../../../media/svgs/file_download_white_24dp.svg";

class WahlUndGeschaeftsOrdnung extends React.Component {

  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.to = this.props.to;
  }

  render() {
    return (
      <PostTemplate 
        title="Wahl- und Geschäftsordnung"
        timeOfPublishment="März 24, 2017"
        type={this.type}
        to={this.to}
      >

        <p>
          Im Folgenden ist die aktuelle Wahl- und Geschäftsordnung der BSV Düsseldorf in der zuletzt auf der 24. Bezirksdelegiertenkonferenz am 23.03.2017 in Düsseldorf geänderten Fassung.
        </p>

        <IconButton href={pdf} icon={downloadIcon}>Wahl- und Geschäftsordnung als PDF</IconButton>

      </PostTemplate>
    );
  }

}

export default WahlUndGeschaeftsOrdnung;