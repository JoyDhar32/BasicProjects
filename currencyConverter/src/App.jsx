import React from 'react'
import Button from './assets/button/Button'
import PropsComponent from './assets/Components/PropsComponent'

const App = () => {
  return (
 <>
 <img src="https://via.placeholder.com/100" />
 <h1>Hello React</h1>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nulla?</p>
 <Button />
 <PropsComponent fullname="Joy Dhar" age={25} isStudent={true}/>
 </>
  )
}
export default App