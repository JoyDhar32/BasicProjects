import React from 'react'

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