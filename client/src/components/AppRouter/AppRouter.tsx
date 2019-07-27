import React, { useEffect } from 'react'
import { AppMenuItemProps } from '../AppMenuItem/AppMenuItem'
import AppMenu, { AppMenuProps } from '../AppMenu/AppMenu'
import AppHeader from '../AppHeader/AppHeader'
import './app-router.css'
import AppRoute from '../AppRoute/AppRoute'

export interface AppRouterProps {
  options: Array<AppMenuProps>
}

const AppRouter = (props: AppRouterProps) => {
  const pages: Array<React.ReactNode> = []
  const menu = props.options.map((menuOption, key) => {
    if (menuOption.component) {
      pages.push(
        <AppRoute
          name={menuOption.name}
          path={menuOption.path}
          routes={menuOption.routes}
          component={menuOption.component}
          key={key}
        />
      )
    }
    return (
      <AppMenu
        name={menuOption.name}
        path={menuOption.path}
        routes={menuOption.routes}
        level={menuOption.level}
        component={menuOption.component}
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
        <div className="app-menu">{menu}</div>
      </div>
      <div className="app-content">{pages}</div>
    </React.Fragment>
  )
}
export default AppRouter
