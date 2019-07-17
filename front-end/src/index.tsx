import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/AppHeader'

class App extends React.Component {
  constructor(props = {}) {
    super(props)
  }

  render() {
    return (
      <div>
        <AppHeader text="Curso de JavaScript" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
