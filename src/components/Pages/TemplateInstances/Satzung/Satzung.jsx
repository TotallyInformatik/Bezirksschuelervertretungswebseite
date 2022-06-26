import React from "react";
import IconButton from "../../../reusables/IconButton/button";
import PostTemplate from "../../Template/page-template";

import pdf from "./Satzung-BSV-Duesseldorf-23.03.2017.pdf";
import downloadIcon from "./../../../../media/svgs/file_download_white_24dp.svg";

class Satzung extends React.Component {

  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.to = this.props.to;
  }

  render() {
    return (
      <PostTemplate 
        title="Satzung"
        timeOfPublishment="März 24, 2017"
        type={this.type}
        to={this.to}
      >

        <p>
          Im Folgenden ist die aktuelle Satzung der BSV Düsseldorf, in der zuletzt auf der 24. Bezirksdelegiertenkonferenz am 23.03.2017 in Düsseldorf geänderten Fassung.
        </p>

        <IconButton href={pdf} icon={downloadIcon}>Satzung als PDF</IconButton>

      </PostTemplate>
    );
  }

}

export default Satzung;