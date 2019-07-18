import React, { ReactNode } from 'react'
import AppContentExample from './AppContentExample'
import AppContentTheory from './AppContentTheory'
import AppContentCode from './AppContentCode'
export interface AppContentStructureProps {
  title: string
  code?: string
  children?: ReactNode
}
const AppContentStructure = (props: AppContentStructureProps) => {
  let code = props.code ? <AppContentCode code={props.code} /> : undefined
  return (
    <div>
      <div>
        <AppContentExample>{props.children}</AppContentExample>
        <AppContentTheory title={props.title} />
        {code}
      </div>
    </div>
  )
}
export default AppContentStructure
