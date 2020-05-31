import React from 'react';
import './DisplayToolbar.css';

export default class DisplayToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.onTextareaChanged = this.onTextareaChanged.bind(this);
  }

  onTextareaChanged() {
    // Don't care
  }

  render() {
    return (
      <div className="display-toolbar">
        <form className="display">
          <textarea className="display-input" id="display" placeholder="Enter 6 Digit" rows="1" onChange={this.onTextareaChanged} value={this.props.input}></textarea>
        </form>
      </div>
    )
  }
}