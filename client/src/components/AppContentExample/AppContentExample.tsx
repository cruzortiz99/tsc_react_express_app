import React, { ReactNode, useEffect } from 'react'
import './app-content-example.css'

export interface AppContentExampleProps {
  boxName?: string
  children?: ReactNode
}

const AppContentExample = (props: AppContentExampleProps) => {
  const hasName = props.boxName ? (
    <div className="app-content-example-box-title">{props.boxName}</div>
  ) : null
  return (
    <React.Fragment>
      <div className="app-content-example-container">
        {hasName}
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default AppContentExample
