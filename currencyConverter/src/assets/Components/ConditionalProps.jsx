import React from "react";

const ConditionalProps = (props) => {
/*  if (props.login) {
    return <h1>Welcome {props.username}</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
  */

// return(
//     <>
//     {props.login ? <h1>Welcome {props.username}</h1> : <h1>Please Login</h1>}
//     </>
// )
return(props.login? <h1>Welcome {props.username}</h1>:<h1> please Login</h1>)




};

export default ConditionalProps;