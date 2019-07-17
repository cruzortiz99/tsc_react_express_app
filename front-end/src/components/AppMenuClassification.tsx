import React from 'react'
import AppMenuItem, { AppMenuItemProps } from './AppMenuItem'

export type AppMenuClassificationProps = {
  name: string
  children: Array<AppMenuItemProps>
}

const AppMenuClassification = (props: AppMenuClassificationProps) => {
  let items = props.children.map((item, key) => {
    return <AppMenuItem link={item.link} name={item.name} key={key} />
  })
  return (
    <div>
      <h3>{props.name}</h3>
      <ul>{items}</ul>
    </div>
  )
}

export default AppMenuClassification
