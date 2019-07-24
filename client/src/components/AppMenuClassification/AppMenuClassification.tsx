import React, { useEffect } from 'react'
import AppMenuItem from '../AppMenuItem/AppMenuItem'
import './app-menu-classifications.css'

export interface AppMenuClassificationProps {
  name: string
  path: string
  level?: number
  routes?: Array<AppMenuClassificationProps>
}

const AppMenuClassification = (props: AppMenuClassificationProps) => {
  const level = props.level || 1
  let subRoutes =
    props.routes && props.routes.length > 0
      ? props.routes.map((route, key) => {
          return (
            <AppMenuClassification
              path={route.path}
              name={route.name}
              key={key}
              level={level + 1}
              routes={route.routes}
            />
          )
        })
      : undefined
  return (
    <ul>
      <AppMenuItem link={props.path} name={props.name} level={level} />
      {subRoutes}
    </ul>
  )
}

export default AppMenuClassification
