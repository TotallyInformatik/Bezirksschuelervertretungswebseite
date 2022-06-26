import React from "react";

import PageTemplate from "./boring-page-template";

import "./css/gallery.css";

class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.subheading = this.props.subheading;
  }

  render() {
    return <PageTemplate title={this.title} subheading={this.subheading}>
      <section className="gallery-section">
        {this.props.children}
      </section>
    </PageTemplate>;
  }

}

export default Gallery;