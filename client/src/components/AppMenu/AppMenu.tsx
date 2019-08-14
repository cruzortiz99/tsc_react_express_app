import React from 'react'
import AppMenuItem from '../AppMenuItem/AppMenuItem'
import { AppRouteProps } from '../AppRoute/AppRoute'

export interface AppMenuProps extends AppRouteProps {
  level?: number
}

const AppMenu = (props: AppMenuProps) => {
  const level = props.level || 1
  const subRoutes =
    props.routes && props.routes.length > 0
      ? props.routes.map((route, key) => {
          const subRoute = route.path.startsWith('/')
            ? route.path
            : `${props.path}/${route.path}`
          return (
            <AppMenu
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
    </React.Fragment>
  )
}

export default React.memo(AppMenu, () => true)
