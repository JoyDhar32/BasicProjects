import React from "react";

const ConditionalProps = (props) => {
  if (login) {
    return <h1>Welcome {props.username}</h1>;
  } else {
    return <h1>Welcome Guest</h1>;
  }
};

export default ConditionalProps;
