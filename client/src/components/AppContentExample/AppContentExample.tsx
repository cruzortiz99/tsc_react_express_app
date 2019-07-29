import React, { ReactNode } from 'react'
import './app-content-example.css'

export interface AppContentExampleProps {
  children?: ReactNode
}

const AppContentExample = (props: AppContentExampleProps) => {
  return (
    <React.Fragment>
      <div className="app-content-example-container">{props.children}</div>
    </React.Fragment>
  )
}

export default AppContentExample
