import React, { ReactNode, useEffect } from 'react'
import './app-content-structure.css'
import AppHeader from '../AppHeader/AppHeader'
export interface AppContentStructureProps {
  title: string
  children?: React.ReactNode
}
const AppContentStructure = (props: AppContentStructureProps) => {
  return (
    <React.Fragment>
      <AppHeader text={props.title} />
      {props.children}
    </React.Fragment>
  )
}
export default AppContentStructure
