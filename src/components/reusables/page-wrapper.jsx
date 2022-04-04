import React from "react";
import PageFooter from "./Footer/footer";
import Navigation from "./Navigation/navigation";


class PageWrapper extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <Navigation />
      {this.props.children}
      <PageFooter />
    </div>;
  }

}

export default PageWrapper;