import React from 'react'
import AppMenuItem, { AppMenuItemProps } from './AppMenuItem'
import AppHeader, { AppHeaderProps } from './AppHeader'

export interface AppMenuClassificationProps {
  name: string
  children: Array<AppMenuItemProps>
}

const AppMenuClassification = (props: AppMenuClassificationProps) => {
  let items = props.children.map((item, key) => {
    return <AppMenuItem link={item.link} name={item.name} key={key} />
  })
  return (
    <div>
      <AppHeader text={props.name} level={3} />
      <ul>{items}</ul>
    </div>
  )
}

export default AppMenuClassification
