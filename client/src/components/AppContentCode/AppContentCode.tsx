import React, { ReactNode } from 'react'
export interface AppContentCodeProps {
  children?: ReactNode
}
const AppContentCode = (props: AppContentCodeProps) => {
  if (props.children) {
    return (
      <pre>
        <code>{props.children}</code>
      </pre>
    )
  }
  return <React.Fragment />
}
export default AppContentCode
