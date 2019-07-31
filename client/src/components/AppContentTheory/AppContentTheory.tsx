import React, { ReactNode } from 'react'
import AppHeader from '../AppHeader/AppHeader'
import './app-content-theory.css'

export interface AppContentTheoryProps {
  title?: string
  className?: string
  children?: ReactNode
}

const AppContentTheory = (props: AppContentTheoryProps) => {
  const title = props.title ? (
    <AppHeader text={props.title} level={2} />
  ) : (
    undefined
  )
  const className = props.className ? props.className : 'text-content'
  return (
    <React.Fragment>
      {title}
      <div className={`text-content ${className}`}>{props.children}</div>
    </React.Fragment>
  )
}

export default AppContentTheory
