import Introduction from '../pages/Introduction'
import React from 'react'
export default [
  {
    name: 'básico',
    path: '/',
    component: Introduction,
    routes: [
      {
        path: '/introduction',
        name: 'introduction',
        component: Introduction
      },
      {
        path: '/syntax',
        name: 'syntax',
        component: () => <h1>Syntax</h1>
      },
      {
        path: '/comments',
        name: 'comments',
        component: () => <h1>Comments</h1>
      },
      {
        path: '/statements',
        name: 'statements',
        component: () => <h1>Statements</h1>
      },
      {
        path: '/operations',
        name: 'operations',
        component: () => <h1>Operations</h1>
      },
      {
        path: '/variables',
        name: 'variables',
        routes: [
          {
            path: 'definitions',
            name: 'variables',
            component: () => <h1>Variables</h1>
          },
          {
            path: 'scopes',
            name: 'scopes',
            component: () => <h1>Scopes</h1>
          },
          {
            path: 'hoisting',
            name: 'hoisting',
            component: () => <h1>Hoisting</h1>
          }
        ]
      },
      {
        path: '/functions',
        name: 'funciones',
        routes: [
          {
            path: 'definitions',
            name: 'functions',
            component: () => <h1>Functions</h1>
          },
          {
            path: 'arrow-functions',
            name: 'arrow functions',
            component: () => <h1>Arrow Functions</h1>
          }
        ]
      },
      {
        path: '/conditions',
        name: 'condicionales',
        routes: [
          {
            path: '/conditions/if-else',
            name: 'if-else',
            component: () => <h1>If Else</h1>
          },
          {
            path: '/conditions/switches',
            name: 'switches',
            component: () => <h1>Switches</h1>
          }
        ]
      },
      {
        path: '/loops',
        name: 'ciclos',
        routes: [
          {
            path: '/loops/for',
            name: 'for',
            component: () => <h1>For loop</h1>
          },
          {
            path: '/loops/while',
            name: 'while',
            component: () => <h1>While loop</h1>
          },
          {
            path: 'loops/recursive-functions',
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
    routes: [
      {
        path: '/strings',
        name: 'strings',
        component: () => <h1>Strings</h1>
      },
      {
        path: '/arrays',
        name: 'arrays',
        component: () => <h1>Arrays</h1>
      },
      {
        path: '/dates',
        name: 'dates',
        component: () => <h1>Dates</h1>
      },
      {
        path: '/math',
        name: 'math',
        component: () => <h1>Math</h1>
      },
      {
        path: '/dom-access',
        name: 'dom access',
        component: () => <h1>Dom Access</h1>
      },
      {
        path: '/events',
        name: 'events',
        component: () => <h1>Events</h1>
      },
      {
        path: '/json',
        name: 'json',
        component: () => <h1>Json</h1>
      },
      {
        path: '/prototypes',
        name: 'prototypes',
        component: () => <h1>Prototypes</h1>
      },
      {
        path: '/classes',
        name: 'classes',
        component: () => <h1>Classes</h1>
      },
      {
        path: '/ajax',
        name: 'ajax',
        component: () => <h1>Ajax</h1>
      }
    ]
  },
  {
    name: 'avanzado',
    path: 'avanzado',
    routes: [
      {
        path: '/reactjs',
        name: 'reactjs',
        component: () => <h1>React</h1>
      },
      {
        path: '/vuejs',
        name: 'vuejs',
        component: () => <h1>Vue</h1>
      },
      {
        path: '/angularjs',
        name: 'angularjs',
        component: () => <h1>Angular</h1>
      },
      {
        path: '/nodejs',
        name: 'nodejs',
        component: () => <h1>Node</h1>
      },
      {
        path: '/typescript',
        name: 'typescript',
        component: () => <h1>Typescript</h1>
      },
      {
        path: 'flow',
        name: 'flow',
        component: () => <h1>Flow</h1>
      }
    ]
  }
]
