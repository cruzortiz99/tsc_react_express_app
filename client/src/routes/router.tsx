import React from 'react'
import { AppPagesProps } from '../pages/AppPages'
import {
  Basics,
  Syntax,
  Comments,
  Operations,
  Variables,
  Hoisting,
  Scopes,
  ArrowFunctions,
  Conditions,
  ForLoops,
  Functions,
  IfElses,
  Loops,
  RecursiveFunctions,
  SwitchCases,
  WhileLoops
} from '../pages/Basics/index'
const Medium = React.lazy(() => import('../pages/Medium/Medium'))
const Advance = React.lazy(() => import('../pages/Advance/Advance'))
export default [
  {
    name: 'básico',
    path: '/',
    component: (props: AppPagesProps) => (
      <Basics prevRoute='/' nextRoute='/basics/syntax' {...props} />
    ),
    routes: [
      {
        path: '/basics/syntax',
        name: 'sintaxis',
        component: (props: AppPagesProps) => (
          <Syntax prevRoute='/' nextRoute='/basics/comments' {...props} />
        )
      },
      {
        path: '/basics/comments',
        name: 'comentarios',
        component: (props: AppPagesProps) => (
          <Comments
            prevRoute='/basics/syntax'
            nextRoute='/basics/operations'
            {...props}
          />
        )
      },
      {
        path: '/basics/operations',
        name: 'operaciones',
        component: (props: AppPagesProps) => (
          <Operations
            prevRoute='/basics/comments'
            nextRoute='/basics/variables'
            {...props}
          />
        )
      },
      {
        path: '/basics/variables',
        name: 'variables',
        component: (props: AppPagesProps) => (
          <Variables
            prevRoute='/basics/operations'
            nextRoute='/basics/variables/scopes'
            {...props}
          />
        ),
        routes: [
          {
            path: '/basics/variables/scopes',
            name: 'scopes',
            component: (props: AppPagesProps) => (
              <Scopes
                prevRoute='/basics/variables'
                nextRoute='/basics/variables/hoisting'
                {...props}
              />
            )
          },
          {
            path: '/basics/variables/hoisting',
            name: 'hoisting',
            component: (props: AppPagesProps) => (
              <Hoisting
                prevRoute='/basics/variables/scopes'
                nextRoute='/basics/functions'
                {...props}
              />
            )
          }
        ]
      },
      {
        path: '/basics/functions',
        name: 'funciones',
        component: () => <Functions />,
        routes: [
          {
            path: '/basics/functions/arrow-functions',
            name: 'arrow functions',
            component: () => <ArrowFunctions />
          }
        ]
      },
      {
        path: '/basics/conditions',
        name: 'condicionales',
        component: () => <Conditions />,
        routes: [
          {
            path: '/basics/conditions/if-else',
            name: 'if-else',
            component: () => <IfElses />
          },
          {
            path: '/basics/conditions/switches',
            name: 'switches',
            component: () => <SwitchCases />
          }
        ]
      },
      {
        path: '/basics/loops',
        name: 'ciclos',
        component: () => <Loops />,
        routes: [
          {
            path: '/basics/loops/for',
            name: 'for',
            component: () => <ForLoops />
          },
          {
            path: '/basics/loops/while',
            name: 'while',
            component: () => <WhileLoops />
          },
          {
            path: '/basics/loops/recursive-functions',
            name: 'recursive functions',
            component: () => <RecursiveFunctions />
          }
        ]
      }
    ]
  },
  {
    name: 'intermedio',
    path: '/intermedio',
    component: () => <Medium />,
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
    component: () => <Advance />,
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
