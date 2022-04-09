import React from "react";
import PageWrapper from "../../reusables/page-wrapper";

import "./css/boring-page.css";

class PageTemplate extends React.Component {

  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.subheading = this.props.subheading;
  }

  render() {
    return <PageWrapper>
      <main className="page-template">
        <section className="title-section">
          <article>
            <h1 className="heading">
              {this.title}
            </h1>
            <h2 className="sub-heading">
              {this.subheading}
            </h2>
          </article>
        </section>
        <section className="page-content-section">
          {this.props.children}
        </section>
      </main>
    </PageWrapper>;
  }


}

export default PageTemplate;

