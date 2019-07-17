import React, { Children } from 'react'
import { AppMenuItemProps } from './AppMenuItem'
import AppMenuClassification, {
  AppMenuClassificationProps
} from './AppMenuClassification'

type AppMenuProps = {
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
  return <div>{classification}</div>
}
