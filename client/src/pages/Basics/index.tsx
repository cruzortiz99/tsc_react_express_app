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
