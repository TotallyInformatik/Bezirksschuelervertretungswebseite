import React from "react";
import PostTemplate from "../../Template/page-template";

class BezirksvorstandssitzungenOnline extends React.Component {

  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.to = this.props.to;
  }

  render() {
    return (
      <PostTemplate 
        title="Bezirksvorstandssitzungen Online"
        timeOfPublishment="Dezember 1, 2020"
        type={this.type}
        to={this.to}
      >

        <p>
          Wegen der aktuellen Lage finden die wöchentlichen offenen Bezirksvorstandssitzungen online statt. Wenn du Interesse hast an den Sitzungen teilzunehmen, 
          schreib uns einfach eine Mail oder schick uns eine Nachricht auf <a href="https://www.instagram.com/bsv.duesseldorf/">{">"}Instagram{"<"}</a>.
        </p>

        <p>
          Bis dann!
        </p>

      </PostTemplate>
    );
  }

}

export default BezirksvorstandssitzungenOnline;