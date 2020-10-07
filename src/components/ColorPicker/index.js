import React from "react";
import "./index.css";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
    };

    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(e) {
    this.setState({
      color: e.target.value,
    });
  }

  render() {
    return (
      <div className="color-picker-container">
        <h2
          className="color-picker-heading"
          style={{ color: this.state.color }}
        >
          COLORFUL
        </h2>
        <input type="color" onChange={this.handleColorChange} />
      </div>
    );
  }
}

export default ColorPicker;
