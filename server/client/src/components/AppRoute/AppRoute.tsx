import React from 'react'
import { Route } from 'react-router'
import { AppPagesProps } from '../../pages/AppPages'
import AppLoader from '../AppLoader/AppLoader'

export interface AppRouteProps {
  name: string
  path: string
  routes?: AppRouteProps[]
  component?: (props: AppPagesProps) => JSX.Element
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
      <React.Suspense fallback={<AppLoader />}>
        <Route path={props.path} exact component={props.component} />
        {subRoutes}
      </React.Suspense>
    </React.Fragment>
  )
}

export default React.memo(AppRoute, () => true)
