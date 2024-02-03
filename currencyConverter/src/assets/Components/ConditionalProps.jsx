import React from "react";
import PropsStyle from "./PropsStyle.module.css";
const ConditionalProps = (props) => {
/*  if (props.login) {
    return <h1>Welcome {props.username}</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
  */

  return (
    <>
      {props.login ? (
        <h1 className={PropsStyle.title}>Welcome {props.username}</h1>
      ) : (
        <h1 className={PropsStyle.titleNon}>Please Login</h1>
      )}
    </>
  );
  
// return(props.login? <h1>Welcome {props.username}</h1>:<h1> please Login</h1>)




};

export default ConditionalProps;
