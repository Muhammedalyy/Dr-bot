import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "statistics",
      handler: props.actionProvider.handleStats,
      id: 1,
    },
    { text: "nearby pharmacies", handler: () => {}, id: 2 },
    { text: "teezy wag3any", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;