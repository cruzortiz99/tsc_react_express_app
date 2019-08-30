import React from 'react'
import { Route, Link } from 'react-router-dom'
import classes from './app-menu-item.css'
import { RouteChildrenProps } from 'react-router'

export interface AppMenuItemProps {
  link: string
  name: string
  level?: number
}

const AppMenuItem = (props: AppMenuItemProps) => {
  const level = props.level || 1
  const classNameByLevel =
    level < 2 ? classes.itemFirstLevel : classes.itemSublevel
  const classByMatch = ({ match }: RouteChildrenProps) =>
    match
      ? [classes.item, classes.itemClicked].join(' ')
      : [classes.item, classes.itemHover].join(' ')
  return (
    <Route path={props.link} exact>
      {childrenProps => {
        return (
          <Link className={classNameByLevel} to={props.link}>
            <li
              className={classByMatch(childrenProps)}
              style={{ paddingLeft: `${10 * level}px` }}
            >
              {props.name}
            </li>
          </Link>
        )
      }}
    </Route>
  )
}
export default React.memo(AppMenuItem, () => true)
