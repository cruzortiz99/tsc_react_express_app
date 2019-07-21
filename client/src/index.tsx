import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import AppMenu, { AppMenuProps } from './components/AppMenu/AppMenu'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Introduction from './views/Introduction'
import './css/main.css'

interface AppState {
  menu: AppMenuProps
}
const App = () => {
  /* Using react hook to set the state of a functional component */
  let [options, setOptions] = useState([
    {
      name: 'básico',
      children: [
        {
          link: '/introduction',
          name: 'introduction'
        },
        {
          link: '/syntax',
          name: 'syntax'
        },
        {
          link: '/comments',
          name: 'comments'
        },
        {
          link: '/variables',
          name: 'variables'
        },
        {
          link: '/variables/scopes',
          name: 'scopes'
        },
        {
          link: '/variables/hoisting',
          name: 'hoisting'
        },
        {
          link: '/statements',
          name: 'statements'
        },
        {
          link: '/operations',
          name: 'operations'
        },
        {
          link: '/functions',
          name: 'functions'
        },
        {
          link: '/functions/arrow-functions',
          name: 'arrow functions'
        },
        {
          link: '/conditions',
          name: 'conditions'
        },
        {
          link: '/loops',
          name: 'loops'
        }
      ]
    },
    {
      name: 'intermedio',
      children: [
        {
          link: '/events',
          name: 'events'
        },
        {
          link: '/math',
          name: 'math'
        },
        {
          link: '/arrays',
          name: 'arrays'
        },
        {
          link: '/dates',
          name: 'dates'
        },
        {
          link: '/strings',
          name: 'strings'
        },
        {
          link: '/dom-access',
          name: 'dom access'
        },
        {
          link: '/json',
          name: 'json'
        },
        {
          link: '/prototypes',
          name: 'prototypes'
        },
        {
          link: '/classes',
          name: 'classes'
        }
      ]
    },
    {
      name: 'avanzado',
      children: [
        {
          link: '/reactjs',
          name: 'reactjs'
        },
        {
          link: '/vuejs',
          name: 'vuejs'
        },
        {
          link: '/angularjs',
          name: 'angularjs'
        },
        {
          link: '/nodejs',
          name: 'nodejs'
        },
        {
          link: '/typescript',
          name: 'typescript'
        },
        {
          link: 'flow',
          name: 'flow'
        }
      ]
    }
  ])
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
