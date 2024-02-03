import React from 'react'
import PropTypes from 'prop-types'
const PropsComponent = (props) => {
  return (
 <>
 <h1>User Details</h1>
 <p>FullName: {props.fullname}</p>
    <p>Age: {props.age}</p>
    <p>Occupation: {props.isStudent?'Student':'Other'}</p>
 </>
  )
}
PropsComponent.propTypes ={
    fullname: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
    
}
PropsComponent.defaultProps ={
    fullname: 'Guest',
    age: 25,
    isStudent: true
}
export default PropsComponent

/*
Props: 
- Full form of props is properties
- Props are read-only
- Props are immutable
- Props allow you to pass data from a parent (wrapping) component to a child (embedded) component.
- Props are passed to components via HTML attributes.
- Props are used to pass data, event
- Props are used to pass data from parent to child component

*/
/*
PropTypes: 
- PropTypes is a library that is used to type check the props that are passed to a component.
- PropTypes will help you to type check the props that are passed to a component.

Default Props:
- Default props are used to set the default values for the props.
*/