import React, { useEffect, Component } from 'react'
import AppMenuItem from '../AppMenuItem/AppMenuItem'
import './app-menu-classifications.css'
import { Route } from 'react-router'

export interface AppMenuClassificationProps {
  name: string
  path: string
  level?: number
  component: React.FunctionComponent
  routes?: Array<AppMenuClassificationProps>
}

const AppMenuClassification = (props: AppMenuClassificationProps) => {
  const level = props.level || 1
  let subRoutes =
    props.routes && props.routes.length > 0
      ? props.routes.map((route, key) => {
          let subRoute = route.path.startsWith('/')
            ? route.path
            : `${props.path}/${route.path}`
          return (
            <AppMenuClassification
              path={subRoute}
              name={route.name}
              key={key}
              level={level + 1}
              routes={route.routes}
              component={route.component}
            />
          )
        })
      : undefined
  return (
    <React.Fragment>
      <ul>
        <AppMenuItem link={props.path} name={props.name} level={level} />
        {subRoutes}
      </ul>
      <Route exact path={props.path} component={props.component} />
    </React.Fragment>
  )
}

export default AppMenuClassification
