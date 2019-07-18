import React from 'react'
export interface AppContentCodeProps {
  code: string
}
const AppContentCode = (props: AppContentCodeProps) => {
  return (
    <pre>
      <code>{props.code}</code>
    </pre>
  )
}
export default AppContentCode
