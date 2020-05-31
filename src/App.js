import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

import Buttons from "./components/Buttons";
import DisplayToolbar from "./components/DisplayToolbar";
import { dispatchTicketList } from "./redux/action/ticketAction";

import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };

    this.onDigit = this.onDigit.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onBack = this.onBack.bind(this);
  }
  onDigit({ target }) {
    const digit = target.innerText;
    const input = this.state.input;

    if (input === "0") {
      this.setState({
        input: digit,
      });
    } else if (input.length < 6) {
      this.setState({
        input: input.concat(digit),
      });
    }
  }
  
  onClear() {
    this.setState({
      input: "",
    });
  }

  onBack() {
    var enteredNumber = this.state.input;
    var inputResult =
      enteredNumber && enteredNumber != ""
        ? enteredNumber.substring(0, enteredNumber.length - 1)
        : "";
    this.setState({
      input: inputResult,
    });
  }

  addTicket(input) {
    let ticketList = [...this.props.ticketList];
    if (
      input.length == 6 &&
      ticketList.length < 5 &&
      !ticketList.includes(input)
    ) {
      ticketList.push(input);
      this.props.dispatchTicketList(ticketList);
      this.setState({ input: "" });
    }
  }

  deleteTicket(index) {
    let ticketList = [...this.props.ticketList];
    ticketList.splice(index, 1);
    this.props.dispatchTicketList(ticketList);
  }
  getTicketList() {
    let ticketList = [...this.props.ticketList];
    let ticketItems = [];
    ticketList.forEach((ticket, index) => {
      let numberArray = ticket.split("");
      let numberDiv = [];
      numberArray.forEach((number, idx) => {
        numberDiv.push(
          <div key={number + idx} className="individual-number-container">
            <div className="individual-number">{number}</div>
          </div>
        );
      });
      ticketItems.push(
        <div key={ticket} className="ticket-container">
          <div
            className="delete-ticket-container"
            onClick={() => {
              this.deleteTicket(index);
            }}
          >
            <DeleteOutlinedIcon className="delete-ticket" />
          </div>
          <div className="ticket-number">
            <div className="ticket-number-label">Ticket #{index + 1}</div>
          </div>
          <div className="ticket-box">{numberDiv}</div>
        </div>
      );
    });
    return ticketItems;
  }

  generateRandomTicketNumbers() {
    let randomGeneratedTicket = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    this.addTicket(randomGeneratedTicket);
  }

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="keypad-section">
            <div className="keypad-container">
              <DisplayToolbar input={this.state.input} />

              <Buttons
                onClear={this.onClear}
                onEqual={this.onEqual}
                onBack={this.onBack}
                onDigit={this.onDigit}
              />
              <div className="add-tickets">
                <div
                  className="add-ticket-label"
                  onClick={() => this.addTicket(this.state.input)}
                >
                  <AddBoxOutlinedIcon className="add-ticket-icon" />
                  ADD TICKETS
                </div>
              </div>
            </div>
          </div>
          <div className="wheel-section">
            <div className="title">
              Click the wheel to generate random tickets
            </div>
            <header className="App-header">
              <img
                src={logo}
                className="App-logo"
                alt="logo"
                onClick={() => this.generateRandomTicketNumbers()}
              />
            </header>
            <div className="ticket-Range-box">
              <div className="ticket-Range-text">
                Ticket number range: 100000 - 999999
              </div>
            </div>
          </div>
        </div>
        {this.props.ticketList.length > 0 ? (
          <div className="result-ticket-list">
            <div className="ticket-list-heading">Your Selected Tickets : </div>
            <div className="ticket-list-container">{this.getTicketList()}</div>
          </div>
        ) : null}
      </div>
    );
  }
}
function mapStateToProps(reduxStore) {
  return {
    ticketList: reduxStore.ticketList ? reduxStore.ticketList.data : [],
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { dispatchTicketList: dispatchTicketList },
    dispatch
  );
}
export default connect(mapStateToProps, matchDispatchToProps)(App);
