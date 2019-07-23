import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import AppMenu from './components/AppMenu/AppMenu'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Introduction from './views/Introduction'
import './css/main.css'
import menu from './content/menu.json'

const App = () => {
  /* Using react hook to set the state of a functional component */
  /* Passing a function avoid component to re-render, only calling the function in the first rendering */
  let [options] = useState(() => menu)
  return (
    <React.Fragment>
      <Router>
        <AppMenu options={options} />
        <Switch>
          <Route exact path="/(introduction)*" component={Introduction} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
