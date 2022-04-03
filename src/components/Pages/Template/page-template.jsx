import React from "react";

import PageFooter from "../../reusables/Footer/footer";
import $ from "jquery";

import "./css/page-template.css";
import "./css/page-link-template.css";
import { NavLink } from "react-router-dom";
import IndexHeaderLink from "../../reusables/Navigation/index-link";


class PageTemplate extends React.Component {

  static defaultProps = {
    title: "",
    thumbnail: null,
    thumbnail_description: "",
    contents: null,
    timeofPublishment: ""
  };

  static abbreviatedContentElements = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "Q", "A"];

  constructor(props) {
    super(props);

    this.type = this.props.type; //! Very important -> defines whether the component will be a page or a link

    this.element = <div>placeholder</div>;

    this.title = this.props.title;
    this.thumbnail = this.props.thumbnail;
    this.thumbnail_description = this.props.thumbnail_description;
    this.contents = this.props.children;
    this.publicationDate = this.props.timeOfPublishment;
    this.to = this.props.to;
    console.log(this.to);

    this.setElementBasedOnType();

  }

  processAsLink() {

    this.linkElementRef = React.createRef();
    this.element = <NavLink to={this.to} onClick= {() => window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })}>
      <div className="card-link" ref={this.linkElementRef}>
        <img src={this.thumbnail} alt={this.thumbnail_description} />
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
        </section>
        <div className="fade"></div>
      </div>
    </NavLink>

  }

  processAsPage() {

    this.element = <main className="template-page">
      <section className="template-landing-section">
        <article>
          <h1>
            {this.title}
          </h1>
          <h3>
            {this.title}
          </h3>
        </article>
        <img src={this.thumbnail} alt={this.thumbnail_description} />
      </section>
      <section className="template-content-section">
        <p className="upload-date">Hochgeladen am {this.publicationDate}</p>

        <article>
          <h2>
            {this.title}
          </h2>


          {this.contents}
        </article>

      </section>

      <PageFooter />

    </main>;

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

  render() { return this.element; }

  componentDidMount() {
    if (this.type == "link") {
      let pageContentsArticle = $(this.linkElementRef.current).find(".abbreviated-info > p");
      let pageContents = pageContentsArticle.children();

      pageContentsArticle.empty();

      for (let contentElement of pageContents) {
        if (PageTemplate.abbreviatedContentElements.includes(contentElement.tagName)) {
          pageContentsArticle.append(contentElement.innerText + " ");
        }

      }

    }
  }

}

export default PageTemplate;
