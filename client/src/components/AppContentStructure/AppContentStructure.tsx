import React from 'react'
import AppHeader from '../AppHeader/AppHeader'
import './app-content-structure.css'
import { RouteComponentProps } from 'react-router'
import AppButton from '../AppButton/AppButton'
export interface AppContentStructureProps extends RouteComponentProps {
  title: string
  children?: React.ReactNode
  prevRoute?: string
  nextRoute?: string
}
const AppContentStructure = (props: AppContentStructureProps) => {
  const goToRoute = (route: string | undefined) => {
    props.history.push(route || '')
  }
  const nextRoute = props.nextRoute ? (
    <AppButton onClick={() => goToRoute(props.nextRoute)}>Siguiente</AppButton>
  ) : null
  const prevRoute = props.prevRoute ? (
    <AppButton onClick={() => goToRoute(props.prevRoute)}>Atrás</AppButton>
  ) : null
  return (
    <React.Fragment>
      <AppHeader text={props.title} />
      {props.children}
      <div className="app-content-nav-buttons-section">
        {prevRoute}
        {nextRoute}
      </div>
    </React.Fragment>
  )
}
export default AppContentStructure
