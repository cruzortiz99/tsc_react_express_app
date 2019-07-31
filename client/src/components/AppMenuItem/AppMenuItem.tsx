import React, { useEffect, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import './app-menu-item.css'
import { RouteChildrenProps } from 'react-router'

export interface AppMenuItemProps {
  link: string
  name: string
  level?: number
}

const AppMenuItem = (props: AppMenuItemProps) => {
  const level = props.level || 1
  const classNameByLevel =
    level < 2 ? 'app-menu-item-first-level' : 'app-menu-item-sublevel'
  const classByMatch = ({ match }: RouteChildrenProps) =>
    match
      ? 'app-menu-item app-menu-item-clicked'
      : 'app-menu-item app-menu-item-hover'
  return (
    <Route
      path={props.link}
      exact
      children={(childrenProps) => {
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
    />
  )
}
export default AppMenuItem
