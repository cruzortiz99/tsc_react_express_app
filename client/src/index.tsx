import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/AppHeader'
import AppMenu, { AppMenuProps } from './components/AppMenu'
import { BrowserRouter as Router } from 'react-router-dom'

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
      <div>
        <AppHeader text="Curso de JavaScript" />
        <Router>
          <AppMenu options={this.state.menu.options} />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
