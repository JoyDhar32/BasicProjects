import React from "react";
import PropsStyle from "./PropsStyle.module.css";
import PropType from "prop-types";
const ConditionalProps = (props) => {
/*  if (props.login) {
    return <h1>Welcome {props.username}</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
  */
const User= <h1 className={PropsStyle.title}>Welcome {props.username}</h1>;
const Guest= <h1 className={PropsStyle.title_none}>Please Login</h1>;
  return (
    <>
      {props.login ? User: Guest}    
    </>
  );
  
// return(props.login? <h1>Welcome {props.username}</h1>:<h1> please Login</h1>)
};

ConditionalProps.PropType={
  Login: PropType.bool,
  username: PropType.string
}
ConditionalProps.defaultProps={
  Login: false,
  username: "Guest"
}
export default ConditionalProps;
