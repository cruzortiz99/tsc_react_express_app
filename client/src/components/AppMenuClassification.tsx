import React from 'react'
import AppMenuItem, { AppMenuItemProps } from './AppMenuItem'
import AppHeader, { AppHeaderProps } from './AppHeader'

export interface AppMenuClassificationProps {
  name?: string
  children: Array<AppMenuItemProps>
}

const AppMenuClassification = (props: AppMenuClassificationProps) => {
  let items = props.children.map((item, key) => {
    return <AppMenuItem link={item.link} name={item.name} key={key} />
  })
  if (props.name) {
    return (
      <React.Fragment>
        <AppHeader text={props.name} level={3} />
        <ul>{items}</ul>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <ul>{items}</ul>
      </React.Fragment>
    )
  }
}

export default AppMenuClassification
