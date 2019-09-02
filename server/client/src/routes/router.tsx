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
import { Medium, Strings, DatesC, Arrays, Objects } from '../pages/Medium/index'
import { Advance } from '../pages/Advance/index'
import MathC from '../pages/Medium/Math'
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
        component: (props: AppPagesProps) => (
          <Functions
            prevRoute='/basics/variables/hoisting'
            nextRoute='/basics/functions/arrow-functions'
            {...props}
          />
        ),
        routes: [
          {
            path: '/basics/functions/arrow-functions',
            name: 'arrow functions',
            component: (props: AppPagesProps) => (
              <ArrowFunctions
                prevRoute='/basics/functions'
                nextRoute='/basics/conditions'
                {...props}
              />
            )
          }
        ]
      },
      {
        path: '/basics/conditions',
        name: 'condicionales',
        component: (props: AppPagesProps) => (
          <Conditions
            prevRoute='/basics/functions/arrow-functions'
            nextRoute='/basics/conditions/if-else'
            {...props}
          />
        ),
        routes: [
          {
            path: '/basics/conditions/if-else',
            name: 'if-else',
            component: (props: AppPagesProps) => (
              <IfElses
                prevRoute='/basics/conditions'
                nextRoute='/basics/conditions/switches'
                {...props}
              />
            )
          },
          {
            path: '/basics/conditions/switches',
            name: 'switches',
            component: (props: AppPagesProps) => (
              <SwitchCases
                prevRoute='/basics/conditions/if-else'
                nextRoute='/basics/loops'
                {...props}
              />
            )
          }
        ]
      },
      {
        path: '/basics/loops',
        name: 'ciclos',
        component: (props: AppPagesProps) => (
          <Loops
            prevRoute='/basics/conditions/switches'
            nextRoute='/basics/loops/for'
            {...props}
          />
        ),
        routes: [
          {
            path: '/basics/loops/for',
            name: 'for',
            component: (props: AppPagesProps) => (
              <ForLoops
                prevRoute='/basics/loops'
                nextRoute='/basics/loops/while'
                {...props}
              />
            )
          },
          {
            path: '/basics/loops/while',
            name: 'while',
            component: (props: AppPagesProps) => (
              <WhileLoops
                prevRoute='/basics/loops/for'
                nextRoute='/basics/loops/recursive-functions'
                {...props}
              />
            )
          },
          {
            path: '/basics/loops/recursive-functions',
            name: 'recursive functions',
            component: (props: AppPagesProps) => (
              <RecursiveFunctions
                prevRoute='/basics/loops/while'
                nextRoute='/intermedio'
                {...props}
              />
            )
          }
        ]
      }
    ]
  },
  {
    name: 'intermedio',
    path: '/intermedio',
    component: (props: AppPagesProps) => (
      <Medium
        prevRoute='/basics/loops/recursive-functions'
        nextRoute='/intermedio/strings'
        {...props}
      />
    ),
    routes: [
      {
        path: '/intermedio/strings',
        name: 'strings',
        component: (props: AppPagesProps) => (
          <Strings
            nextRoute='/intermedio/dates'
            prevRoute='/intermedio'
            {...props}
          ></Strings>
        )
      },
      {
        path: '/intermedio/dates',
        name: 'dates',
        component: (props: AppPagesProps) => (
          <DatesC
            nextRoute='/intermedio/arrays'
            prevRoute='/intermedio/strings'
            {...props}
          />
        )
      },
      {
        path: '/intermedio/arrays',
        name: 'arrays',
        component: (props: AppPagesProps) => (
          <Arrays
            nextRoute='/intermedio/objects'
            prevRoute='/intermedio/dates'
            {...props}
          />
        )
      },
      {
        path: '/intermedio/objects',
        name: 'objects',
        component: (props: AppPagesProps) => (
          <Objects
            prevRoute='/intermedio/arrays'
            nextRoute='/intermedio/math'
            {...props}
          />
        )
      },
      {
        path: '/intermedio/math',
        name: 'math',
        component: (props: AppPagesProps) => (
          <MathC
            prevRoute='/intermedio/objects'
            nextRoute='/intermedio/dom-access'
            {...props}
          />
        )
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
    component: (props: AppPagesProps) => (
      <Advance
        prevRoute='/intermedio/ajax'
        nextRoute='/avanzado/reactjs'
        {...props}
      />
    ),
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
