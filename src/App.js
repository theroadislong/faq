import React from "react";
import "./App.css";
import Question from "./Question.js";
import data from "./data.json";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {data.map((item, index) => (
          <Question key={index} data={item} />
        ))}
      </div>
    );
  }
}

export default App;
