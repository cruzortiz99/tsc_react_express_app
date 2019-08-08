import React from 'react'
import AppMenu, { AppMenuProps } from '../AppMenu/AppMenu'
import AppHeader from '../AppHeader/AppHeader'
import classes from './app-router.css'
import AppRoute from '../AppRoute/AppRoute'

export interface AppRouterProps {
  options: AppMenuProps[]
}

const AppRouter = (props: AppRouterProps) => {
  const pages: React.ReactNode[] = []
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
      <div className={classes.sidebar}>
        <div className={classes.header}>
          <AppHeader text="JavaScript" />
        </div>
        <div className={classes.menu}>{menu}</div>
      </div>
      <div className={classes.content}>{pages}</div>
    </React.Fragment>
  )
}
export default AppRouter
