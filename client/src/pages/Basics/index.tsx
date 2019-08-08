import React from 'react'

const importComponentWithDelay = (componentPath: string, delay: number) =>
  React.lazy(() =>
    Promise.all([
      import(`${componentPath}`),
      new Promise((resolve) => setTimeout(resolve, delay))
    ]).then(([moduleExports]) => moduleExports)
  )

export const Basics = importComponentWithDelay('./Basics', 5000)
export const Syntax = React.lazy(() => import('./Syntax'))
export const Comments = React.lazy(() => import('./Comment'))
export const Operations = React.lazy(() => import('./Operations'))
export const Variables = React.lazy(() => import('./Variables'))
export const Scopes = React.lazy(() => import('./Scopes'))
export const Hoisting = React.lazy(() => import('./Hoisting'))
export const Functions = React.lazy(() => import('./Functions'))
export const ArrowFunctions = React.lazy(() => import('./ArrowFunctions'))
export const Conditions = React.lazy(() => import('./Conditions'))
export const IfElses = React.lazy(() => import('./IfElses'))
export const SwitchCases = React.lazy(() => import('./SwitchCases'))
export const Loops = React.lazy(() => import('./Loops'))
export const ForLoops = React.lazy(() => import('./ForLoops'))
export const WhileLoops = React.lazy(() => import('./WhileLoops'))
export const RecursiveFunctions = React.lazy(() =>
  import('./RecursiveFunctions')
)
