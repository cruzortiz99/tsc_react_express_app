import React from 'react'
const Basics = React.lazy(() => import('../pages/Basics/Basics'))
export default [
  {
    name: 'básico',
    path: '/',
    component: () => <Basics />,
    routes: [
      {
        path: '/basics/syntax',
        name: 'syntax',
        component: () => <h1>Syntax</h1>
      },
      {
        path: '/basics/comments',
        name: 'comments',
        component: () => <h1>Comments</h1>
      },
      {
        path: '/basics/statements',
        name: 'statements',
        component: () => <h1>Statements</h1>
      },
      {
        path: '/basics/operations',
        name: 'operations',
        component: () => <h1>Operations</h1>
      },
      {
        path: '/basics/variables',
        name: 'variables',
        component: () => <h1>Variables</h1>,
        routes: [
          {
            path: '/basics/variables/scopes',
            name: 'scopes',
            component: () => <h1>Scopes</h1>
          },
          {
            path: '/basics/variables/hoisting',
            name: 'hoisting',
            component: () => <h1>Hoisting</h1>
          }
        ]
      },
      {
        path: '/basics/functions',
        name: 'funciones',
        component: () => <h1>Functions</h1>,
        routes: [
          {
            path: '/basics/functions/arrow-functions',
            name: 'arrow functions',
            component: () => <h1>Arrow Functions</h1>
          }
        ]
      },
      {
        path: '/basics/conditions',
        name: 'condicionales',
        component: () => <h1>Conditions</h1>,
        routes: [
          {
            path: '/basics/conditions/if-else',
            name: 'if-else',
            component: () => <h1>If Else</h1>
          },
          {
            path: '/basics/conditions/switches',
            name: 'switches',
            component: () => <h1>Switches</h1>
          }
        ]
      },
      {
        path: '/basics/loops',
        name: 'ciclos',
        component: () => <h1>Ciclos</h1>,
        routes: [
          {
            path: '/basics/loops/for',
            name: 'for',
            component: () => <h1>For loop</h1>
          },
          {
            path: '/basics/loops/while',
            name: 'while',
            component: () => <h1>While loop</h1>
          },
          {
            path: '/basics/loops/recursive-functions',
            name: 'recursive functions',
            component: () => <h1>Recursive</h1>
          }
        ]
      }
    ]
  },
  {
    name: 'intermedio',
    path: '/intermedio',
    component: () => <h1>Intermedio</h1>,
    routes: [
      {
        path: '/intermedio/strings',
        name: 'strings',
        component: () => <h1>Strings</h1>
      },
      {
        path: '/intermedio/arrays',
        name: 'arrays',
        component: () => <h1>Arrays</h1>
      },
      {
        path: '/intermedio/dates',
        name: 'dates',
        component: () => <h1>Dates</h1>
      },
      {
        path: '/intermedio/math',
        name: 'math',
        component: () => <h1>Math</h1>
      },
      {
        path: '/intermedio/dom-access',
        name: 'dom access',
        component: () => <h1>Dom Access</h1>
      },
      {
        path: '/intermedio/events',
        name: 'events',
        component: () => <h1>Events</h1>
      },
      {
        path: '/intermedio/json',
        name: 'json',
        component: () => <h1>Json</h1>
      },
      {
        path: '/intermedio/prototypes',
        name: 'prototypes',
        component: () => <h1>Prototypes</h1>
      },
      {
        path: '/intermedio/classes',
        name: 'classes',
        component: () => <h1>Classes</h1>
      },
      {
        path: '/intermedio/ajax',
        name: 'ajax',
        component: () => <h1>Ajax</h1>
      }
    ]
  },
  {
    name: 'avanzado',
    path: '/avanzado',
    component: () => <h1>Avanzado</h1>,
    routes: [
      {
        path: '/avanzado/reactjs',
        name: 'reactjs',
        component: () => <h1>React</h1>
      },
      {
        path: '/avanzado/vuejs',
        name: 'vuejs',
        component: () => <h1>Vue</h1>
      },
      {
        path: '/avanzado/angularjs',
        name: 'angularjs',
        component: () => <h1>Angular</h1>
      },
      {
        path: '/avanzado/nodejs',
        name: 'nodejs',
        component: () => <h1>Node</h1>
      },
      {
        path: '/avanzado/typescript',
        name: 'typescript',
        component: () => <h1>Typescript</h1>
      },
      {
        path: '/avanzado/flow',
        name: 'flow',
        component: () => <h1>Flow</h1>
      }
    ]
  }
]
