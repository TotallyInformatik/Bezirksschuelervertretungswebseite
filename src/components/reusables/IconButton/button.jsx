import React from "react";
import { Link } from "react-router-dom";
import "./button.css"


class IconButton extends React.Component {

  constructor(props) {
    super(props);
    this.icon = this.props.icon;
    this.href = this.props.href;

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    window.location.href = this.href;
  }

  render() {
    return <button 
      className="icon-button"
      onClick={this.onClick} target="_blank">
      <div className="icon" style={{
        backgroundImage: `url(${this.icon})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center"
      }}></div>
      {this.props.children}
    </button>
  }

}

export default IconButton;