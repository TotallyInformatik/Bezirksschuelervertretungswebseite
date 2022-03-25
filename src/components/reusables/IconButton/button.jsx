import React from "react";
import { Link } from "react-router-dom";
import "./button.css"


class IconButton extends React.Component {

  constructor(props) {
    super(props);
    this.icon = this.props.icon;
    console.log(this.props.download);
    this.download = this.props.download;
  }

  render() {
    return <Link className="icon-button" to={this.download} target="_blank">
      <div className="icon" style={{
        backgroundImage: `url(${this.icon})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center"
      }}></div>
      {this.props.children}
    </Link>
  }

}

export default IconButton;