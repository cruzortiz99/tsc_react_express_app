import React, { ReactNode } from 'react'
import AppContentExample from '../AppContentExample/AppContentExample'
import AppContentTheory from '../AppContentTheory/AppContentTheory'
import AppContentCode from '../AppContentCode/AppContentCode'
import './app-content-structure.css'
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
