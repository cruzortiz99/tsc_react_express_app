import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import AppRouter from './components/AppRouter/AppRouter'
import { BrowserRouter as Router } from 'react-router-dom'
import './css/main.css'
import menu from './content/menu'

const App = () => {
  /* Using react hook to set the state of a functional component */
  /* Passing a function avoid component to re-render, only calling the function in the first rendering */
  let [options] = useState(() => menu)
  return (
    <React.Fragment>
      <Router>
        <AppRouter options={options} />
      </Router>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
