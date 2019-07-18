import React, { ReactNode } from 'react'

export interface AppContentExampleProps {
  children?: ReactNode
}

const AppContentExample = (props: AppContentExampleProps) => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  )
}

export default AppContentExample
