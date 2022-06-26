import React from "react";

import $ from "jquery";

import "./css/page-template.css";
import "./css/page-link-template.css";
import { NavLink } from "react-router-dom";
import PageWrapper from "../../reusables/page-wrapper";
import ScrollIndicator from "../../reusables/ScrollIndicator/scroll-indicator";


class PostTemplate extends React.Component {

  static defaultProps = {
    title: "",
    thumbnail: null,
    thumbnail_description: "",
    contents: null,
    timeofPublishment: "",
    color: "rgb(204, 127, 127)"
  };

  static abbreviatedContentElements = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "Q", "A"];

  constructor(props) {
    super(props);

    this.type = this.props.type; //! Very important -> defines whether the component will be a page or a link

    this.color = this.props.color; // string representing the accent color of the page

    this.element = <div>placeholder</div>;

    this.title = this.props.title;
    this.thumbnail = this.props.thumbnail;
    this.thumbnail_description = this.props.thumbnail_description;
    this.contents = this.props.children;
    this.publicationDate = this.props.timeOfPublishment;
    this.to = this.props.to;
  }


  hasThumbnail() {
    return this.thumbnail != null;
  }

  processAsLink() {

    this.linkElementRef = React.createRef();

    this.element = <div className="card-link-wrapper" >
        <NavLink to={this.to} onClick={() => window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })}>
        <div className="card-link" ref={this.linkElementRef} data-title={this.title}>
          {this.hasThumbnail() ? <img src={this.thumbnail} alt={this.thumbnail_description} /> : null}
          <section>
            <article className="heading-info">
              <h4>
                {this.title}
              </h4>
              <p>{this.publicationDate}</p>
            </article>
            <article className="abbreviated-info">
              <p>
                {this.contents}
              </p>
            </article>
            <div className="fade"></div>
          </section>
        </div>
      </NavLink>
    </div>;

  }

  processAsPage() {

    let backgroundText = [];
    for (let i=0; i<3; i++) {
      backgroundText.push(<h1 key={i} className="background-text">{this.title}</h1>);
    }

    let landingSectionStyles = {backgroundColor: this.color};
    if (this.hasThumbnail()) {
      landingSectionStyles["padding-bottom"] = "400px";
    }


    this.element = <PageWrapper>
      <main className="template-post">
            
        <section className="template-landing-section" style={landingSectionStyles}>
          <article>
            <h1>
              {this.title}
            </h1>
          </article>
          <div className="transparent-text">
            {
              backgroundText
            }
          </div>
          {
            this.hasThumbnail() ? null : <ScrollIndicator />
          }
        </section>
        <section className="template-image-section">
          {
            this.hasThumbnail() ? <img src={this.thumbnail} alt={this.thumbnail_description} /> : null
          }
        </section>
        <section className="template-content-section" style={ !this.hasThumbnail() ? {                  
          paddingTop: "100px"
        } : {}}>
          <p className="upload-date">Hochgeladen am {this.publicationDate}</p>

          <article>
            <h2>
              {this.title}
            </h2>


            {this.contents}
          </article>

        </section>

      </main>
    </PageWrapper>;

  }

  setElementBasedOnType() {
    
    switch (this.type) {

      case "link":
        this.processAsLink();
        break;
      case "page":
      default:
        this.processAsPage();
        break;

    }

  }

  render() { 
    this.setElementBasedOnType();
    return this.element; 
  }

  componentDidMount() {

    if (this.type == "link") {
      let pageContentsArticle = $(this.linkElementRef.current).find(".abbreviated-info > p");
      let pageContents = pageContentsArticle.children();

      pageContentsArticle.empty();

      for (let contentElement of pageContents) {
        if (PostTemplate.abbreviatedContentElements.includes(contentElement.tagName)) {
          pageContentsArticle.append(contentElement.innerText + "");
        }

      }

    }

  }

}

export default PostTemplate;
