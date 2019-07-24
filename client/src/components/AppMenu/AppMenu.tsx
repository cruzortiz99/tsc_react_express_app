import React, { useEffect } from 'react'
import { AppMenuItemProps } from '../AppMenuItem/AppMenuItem'
import AppMenuClassification, {
  AppMenuClassificationProps
} from '../AppMenuClassification/AppMenuClassification'
import AppHeader from '../AppHeader/AppHeader'
import './app-menu.css'

export interface AppMenuProps {
  options: Array<AppMenuClassificationProps>
}

const AppMenu = (props: AppMenuProps) => {
  const classification = props.options.map((classification, key) => {
    return (
      <AppMenuClassification
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
    <div className="sidebar">
      <div className="app-header">
        <AppHeader text="JavaScript" />
      </div>
      <div className="app-menu">{classification}</div>
    </div>
  )
}
export default AppMenu
