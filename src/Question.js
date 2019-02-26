import React from "react";

class Question extends React.Component {
  state = {
    isOpen: false
  };
  clickHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const question = (
      <span onClick={this.clickHandler} className="question__title">
        {this.props.data.question}
      </span>
    );
    const answer = (
      <span onClick={this.clickHandler} className="question__answer">
        {this.props.data.answer}
      </span>
    );
    return (
      <div
        className={this.state.isOpen ? "question question--opened" : "question"}
      >
        {question}
        {this.state.isOpen && answer}
      </div>
    );
  }
}

export default Question;
