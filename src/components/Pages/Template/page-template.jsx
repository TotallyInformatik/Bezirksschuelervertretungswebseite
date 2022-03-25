import React from "react";

import PageFooter from "../../reusables/Footer/footer";

import "./page-template.css";


class PageTemplate extends React.Component {

  static defaultProps = {
    title: "",
    thumbnail: null,
    thumbnail_description: "",
    contents: null,
    timeofPublishment: ""
  };

  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.thumbnail = this.props.thumbnail;
    this.thumbnail_description = this.props.thumbnail_description;
    this.contents = this.props.children;
    this.timeOfPublishment = this.props.timeOfPublishment;

    console.log(this.title);
    console.log(this.thumbnail);
  }

  render() {

    return (
      <main>
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
          <p className="upload-date">Hochgeladen am {this.timeOfPublishment}</p>

          <article>
            <h2>
              {this.title}
            </h2>

            {this.contents}
          </article>

        </section>

        <PageFooter />

      </main>
    );

  }

}

export default PageTemplate;
