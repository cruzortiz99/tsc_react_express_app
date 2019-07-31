import React, { ReactNode } from 'react'
import AppHeader from '../AppHeader/AppHeader'

export interface AppContentTheoryProps {
  title?: string
  children?: ReactNode
}

const AppContentTheory = (props: AppContentTheoryProps) => {
  const title = props.title ? (
    <AppHeader text={props.title} level={2} />
  ) : (
    undefined
  )
  return (
    <React.Fragment>
      {title}
      {props.children}
    </React.Fragment>
  )
}

export default AppContentTheory
