import React, { ReactNode} from 'react'
import classes from './app-content-example.css'

export interface AppContentExampleProps {
  boxName?: string
  children?: ReactNode
}

const AppContentExample = (props: AppContentExampleProps) => {
  const hasName = props.boxName ? (
    <div className={classes.boxTitle}>{props.boxName}</div>
  ) : null
  return (
    <React.Fragment>
      <div className={classes.container}>
        {hasName}
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default AppContentExample
