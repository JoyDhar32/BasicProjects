import React from 'react'
import Button from './assets/button/Button'
import PropsComponent from './assets/Components/PropsComponent'
import ConditionalProps from './assets/Components/ConditionalProps'

const App = () => {
  return (
 <>
 <img src="https://via.placeholder.com/100" />
 <h1>Hello React</h1>
<ConditionalProps login={true} username="Joy Dhar" />
<ConditionalProps login={false} username="Joy Dhar" />



 {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nulla?</p>
 <Button />
 <PropsComponent fullname="Joy Dhar" age={25} isStudent={true}/>
 <PropsComponent /> */}
 </>
  )
}
export default App