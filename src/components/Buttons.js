import React from "react";
import "./Buttons.css";
import DeleteIcon from "@material-ui/icons/Delete";
import BackspaceIcon from "@material-ui/icons/Backspace";

export default class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <button id="seven" onClick={this.props.onDigit}>
          <div className="button-label">7</div>
        </button>
        <button id="eight" onClick={this.props.onDigit}>
          <div className="button-label">8</div>
        </button>
        <button id="nine" onClick={this.props.onDigit}>
          <div className="button-label">9</div>
        </button>
        <button id="four" onClick={this.props.onDigit}>
          <div className="button-label">4</div>
        </button>
        <button id="five" onClick={this.props.onDigit}>
          <div className="button-label">5</div>
        </button>
        <button id="six" onClick={this.props.onDigit}>
          <div className="button-label">6</div>
        </button>
        <button id="one" onClick={this.props.onDigit}>
          <div className="button-label">1</div>
        </button>
        <button id="two" onClick={this.props.onDigit}>
          <div className="button-label">2</div>
        </button>
        <button id="three" onClick={this.props.onDigit}>
          <div className="button-label">3</div>
        </button>
        <button id="back" onClick={this.props.onBack}>
          <BackspaceIcon  className="button-label"/>
        </button>
        <button id="zero" onClick={this.props.onDigit}>
          <div className="button-label">0</div>
        </button>
        {/* <button id="equals" onClick={this.props.onEqual}>=</button>? */}
        <button id="clear" onClick={this.props.onClear}>
          <DeleteIcon  className="button-label"/>
        </button>
      </div>
    );
  }
}
