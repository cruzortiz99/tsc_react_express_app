import React, { Children } from 'react'
import { AppMenuItemProps } from './AppMenuItem'
import AppMenuClassification, {
  AppMenuClassificationProps
} from './AppMenuClassification'
import AppHeader from './AppHeader'

export interface AppMenuProps {
  options: Array<AppMenuClassificationProps>
}

const AppMenu = (props: AppMenuProps) => {
  let classification = props.options.map((classification, key) => {
    return (
      <AppMenuClassification
        name={classification.name}
        children={classification.children}
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
