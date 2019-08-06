import React, { ReactNode } from 'react'
import AppHeader from '../AppHeader/AppHeader'
import classes from './app-content-theory.css'

export interface AppContentTheoryProps {
  title?: string
  className?: string
  children?: ReactNode
}

const AppContentTheory = (props: AppContentTheoryProps) => {
  const title = props.title ? (
    <AppHeader text={props.title} level={3} />
  ) : (
    undefined
  )
  const className = props.className ? props.className : null
  return (
    <React.Fragment>
      {title}
      <div className={[classes.text, className].join(' ')}>
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default AppContentTheory
