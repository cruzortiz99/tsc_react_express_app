import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import AppMenu, { AppMenuProps } from './components/AppMenu/AppMenu'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Introduction from './views/Introduction'
import './css/main.css'
import menu from './content/menu.json'

interface AppState {
  menu: AppMenuProps
}
const App = () => {
  /* Using react hook to set the state of a functional component */
  let [options] = useState(menu)
  return (
    <React.Fragment>
      <Router>
        <AppMenu options={options} />
        <Route exact path="/(introduction)*" component={Introduction} />
      </Router>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
