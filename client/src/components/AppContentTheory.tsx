import React, { ReactNode } from 'react'
import AppHeader from './AppHeader'

export interface AppContentTheoryProps {
  title: string
  children?: ReactNode
}

const AppContentTheory = (props: AppContentTheoryProps) => {
  return (
    <React.Fragment>
      <AppHeader text={props.title} level={2} />
      <p>{props.children}</p>
    </React.Fragment>
  )
}

export default AppContentTheory
