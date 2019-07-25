import React, { useEffect } from 'react'
import { AppMenuItemProps } from '../AppMenuItem/AppMenuItem'
import AppMenu, { AppMenuProps } from '../AppMenu/AppMenu'
import AppHeader from '../AppHeader/AppHeader'
import './app-router.css'
import { Route } from 'react-router'
import AppRoute from '../AppRoute/AppRoute'

export interface AppRouterProps {
  options: Array<AppMenuProps>
}

const AppRouter = (props: AppRouterProps) => {
  const pages: Array<React.ReactNode> = []
  const classification = props.options.map((classification, key) => {
    pages.push(
      <AppRoute
        name={classification.name}
        path={classification.path}
        routes={classification.routes}
        component={classification.component}
        key={key}
      />
    )
    return (
      <AppMenu
        name={classification.name}
        path={classification.path}
        routes={classification.routes}
        level={classification.level}
        component={classification.component}
        key={key}
      />
    )
  })
  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="app-header">
          <AppHeader text="JavaScript" />
        </div>
        <div className="app-menu">{classification}</div>
      </div>
      {pages}
    </React.Fragment>
  )
}
export default AppRouter
