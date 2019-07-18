import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/AppHeader'
import AppMenu, { AppMenuProps } from './components/AppMenu'
import { BrowserRouter as Router } from 'react-router-dom'

const menu: AppMenuProps = {
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

class App extends React.Component {
  constructor(props = {}) {
    super(props)
  }

  render() {
    return (
      <div>
        <AppHeader text="Curso de JavaScript" />
        <Router>
          <AppMenu options={menu.options} />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
