import React, { useEffect, Component } from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router'

export interface AppRouteProps {
  name: string
  path: string
  routes?: Array<AppRouteProps>
  component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
}

const AppRoute = (props: AppRouteProps) => {
  let subRoutes =
    props.routes && props.routes.length > 0
      ? props.routes.map((route, key) => {
          let subRoute = route.path.startsWith('/')
            ? route.path
            : `${props.path}/${route.path}`
          return (
            <React.Fragment key={key}>
              <AppRoute
                path={subRoute}
                name={route.name}
                routes={route.routes}
                component={route.component}
              />
            </React.Fragment>
          )
        })
      : undefined
  return (
    <React.Fragment>
      <Route path={props.path} exact component={props.component} />
      {subRoutes}
    </React.Fragment>
  )
}

export default AppRoute
