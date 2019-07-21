import React, { useEffect } from 'react'
import AppMenuItem, { AppMenuItemProps } from '../AppMenuItem/AppMenuItem'
import AppHeader from '../AppHeader/AppHeader'
import './app-menu-classifications.css'

interface AppMenuSubclassificationProps
  extends Array<AppMenuClassificationProps> {}

export interface AppMenuClassificationProps {
  name?: string
  level?: number
  topics: Array<AppMenuItemProps>
  subclassifications?: AppMenuSubclassificationProps
}

const AppMenuClassification = (props: AppMenuClassificationProps) => {
  let level = props.level || 3
  let header = props.name ? (
    <AppHeader text={props.name} level={level} />
  ) : (
    undefined
  )
  let items = props.topics.map((topic, key) => {
    return <AppMenuItem name={topic.name} link={topic.link} key={key} />
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
  useEffect(() => {}, [false])
  return (
    <React.Fragment>
      {header}
      <ul className="subclassifications">{items}</ul>
      <div className="subclassifications">{subclassifications}</div>
    </React.Fragment>
  )
}

export default AppMenuClassification
