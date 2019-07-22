import React, { ReactNode, useEffect } from 'react'
import './app-content-structure.css'
import AppHeader from '../AppHeader/AppHeader'
export interface AppContentStructureProps {
  title: string
  children?: React.ReactNode
}
const AppContentStructure = (props: AppContentStructureProps) => {
  useEffect(() => {}, [false])
  return (
    <div className="app-content">
      <AppHeader text={props.title} />
      {props.children}
    </div>
  )
}
export default AppContentStructure
