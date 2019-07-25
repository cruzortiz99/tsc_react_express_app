import Introduction from '../pages/Introduction'

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
        component: Introduction
      },
      {
        path: '/comments',
        name: 'comments',
        component: Introduction
      },
      {
        path: '/statements',
        name: 'statements',
        component: Introduction
      },
      {
        path: '/operations',
        name: 'operations',
        component: Introduction
      },
      {
        path: '/variables',
        name: 'variables',
        routes: [
          {
            path: 'definitions',
            name: 'variables',
            component: Introduction
          },
          {
            path: 'scopes',
            name: 'scopes',
            component: Introduction
          },
          {
            path: 'hoisting',
            name: 'hoisting',
            component: Introduction
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
            component: Introduction
          },
          {
            path: 'arrow-functions',
            name: 'arrow functions',
            component: Introduction
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
            component: Introduction
          },
          {
            path: '/conditions/switches',
            name: 'switches',
            component: Introduction
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
            component: Introduction
          },
          {
            path: '/loops/while',
            name: 'while',
            component: Introduction
          },
          {
            path: 'loops/recursive-functions',
            name: 'recursive functions',
            component: Introduction
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
        component: Introduction
      },
      {
        path: '/arrays',
        name: 'arrays',
        component: Introduction
      },
      {
        path: '/dates',
        name: 'dates',
        component: Introduction
      },
      {
        path: '/math',
        name: 'math',
        component: Introduction
      },
      {
        path: '/dom-access',
        name: 'dom access',
        component: Introduction
      },
      {
        path: '/events',
        name: 'events',
        component: Introduction
      },
      {
        path: '/json',
        name: 'json',
        component: Introduction
      },
      {
        path: '/prototypes',
        name: 'prototypes',
        component: Introduction
      },
      {
        path: '/classes',
        name: 'classes',
        component: Introduction
      },
      {
        path: '/ajax',
        name: 'ajax',
        component: Introduction
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
        component: Introduction
      },
      {
        path: '/vuejs',
        name: 'vuejs',
        component: Introduction
      },
      {
        path: '/angularjs',
        name: 'angularjs',
        component: Introduction
      },
      {
        path: '/nodejs',
        name: 'nodejs',
        component: Introduction
      },
      {
        path: '/typescript',
        name: 'typescript',
        component: Introduction
      },
      {
        path: 'flow',
        name: 'flow',
        component: Introduction
      }
    ]
  }
]
