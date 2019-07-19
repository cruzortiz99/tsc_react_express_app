import React, { ReactNode } from 'react'
import AppContentExample from './AppContentExample'
import AppContentTheory from './AppContentTheory'
import AppContentCode from './AppContentCode'
export interface AppContentStructureProps {
  title: string
  example?: ReactNode
  paragraphs?: ReactNode
  code?: ReactNode
}
const AppContentStructure = (props: AppContentStructureProps) => {
  return (
    <div className="app-content">
      <div>
        <AppContentExample>{props.example}</AppContentExample>
      </div>
      <div>
        <AppContentTheory title={props.title}>
          {props.paragraphs}
        </AppContentTheory>
      </div>
      <div>
        <AppContentCode>{props.code}</AppContentCode>
      </div>
    </div>
  )
}
export default AppContentStructure
