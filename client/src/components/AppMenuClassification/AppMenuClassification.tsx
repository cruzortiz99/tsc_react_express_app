import React, { useEffect } from 'react'
import AppMenuItem, { AppMenuItemProps } from '../AppMenuItem/AppMenuItem'
import AppHeader from '../AppHeader/AppHeader'
import './app-menu-classifications.css'

export interface AppMenuClassificationProps {
  name?: string
  level?: number
  topics: Array<AppMenuItemProps>
  subclassifications?: Array<AppMenuClassificationProps>
}

const AppMenuClassification = (props: AppMenuClassificationProps) => {
  let level = props.level || 1
  let header = props.name ? (
    <div style={{ paddingLeft: `${5 * level}px` }}>
      <AppHeader text={props.name} level={level} />
    </div>
  ) : (
    undefined
  )
  let items = props.topics.map((topic, key) => {
    return (
      <AppMenuItem
        name={topic.name}
        link={topic.link}
        key={key}
        level={level}
      />
    )
  })
  let subclassifications = props.subclassifications
    ? props.subclassifications.map((subclassification, key) => {
        return (
          <AppMenuClassification
            key={key}
            topics={subclassification.topics}
            name={subclassification.name}
            subclassifications={subclassification.subclassifications}
            level={subclassification.level}
          />
        )
      })
    : undefined
  return (
    <React.Fragment>
      {header}
      <ul>{items}</ul>
      {subclassifications}
    </React.Fragment>
  )
}

export default AppMenuClassification
