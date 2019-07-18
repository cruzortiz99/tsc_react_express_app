import React, { ReactNode } from 'react'

export interface AppContentExampleProps {
  children?: ReactNode
}

const AppContentExample = (props: AppContentExampleProps) => {
  return (
    <React.Fragment>
      <div>{props.children}</div>
    </React.Fragment>
  )
}

export default AppContentExample
