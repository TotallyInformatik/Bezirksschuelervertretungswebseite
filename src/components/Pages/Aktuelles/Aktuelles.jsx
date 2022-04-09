import React from "react";
import PostContext from "../../../PostContext";
import Gallery from "../Template/gallery-page-template";

import "./Aktuelles.css";

class Aktuelles extends React.Component {

  render() {

    let posts = this.context.posts;
    let postComponents = [];
    for (let post of posts) {
      let PostComponent = post[0];
      let postLink = post[1];
      postComponents.push(<PostComponent key={postLink} to={postLink} type="link" />);
    }

    return <Gallery title="Aktuelles" subheading="Posts und Informationen">
      {
        postComponents
      }
    </Gallery>;
  }

}

Aktuelles.contextType = PostContext;

export default Aktuelles;