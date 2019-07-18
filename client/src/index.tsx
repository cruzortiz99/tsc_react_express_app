import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/AppHeader'
import AppMenu, { AppMenuProps } from './components/AppMenu'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Introduction from './views/Introduction'
import './css/main.css'

interface AppState {
  menu: AppMenuProps
}
class App extends React.Component<{}, AppState> {
  constructor(props = {}) {
    super(props)
    this.state = {
      menu: {
        options: [
          {
            name: 'JavaScript',
            children: [
              {
                link: '/introduction',
                name: 'Introduction'
              },
              {
                link: '/syntax',
                name: 'Syntax'
              }
            ]
          }
        ]
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <AppHeader text="Curso de JavaScript" />
        </div>
        <Router>
          <AppMenu options={this.state.menu.options} />
          <Route exact path="/(introduction)*" component={Introduction} />
        </Router>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
