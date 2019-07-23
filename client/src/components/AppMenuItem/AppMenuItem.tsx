import React, { useEffect, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import './app-menu-item.css'

export interface AppMenuItemProps {
  link: string
  name: string
  level?: number
}

const AppMenuItem = (props: AppMenuItemProps) => {
  const level = props.level || 1
  return (
    <Route
      path={props.link}
      exact
      children={({ match }) => {
        return (
          <li
            className={match ? 'app-menu-clicked-link' : 'app-menu-item-hover'}
            style={{ paddingLeft: `${10 * level}px` }}
          >
            <Link className="app-menu-item" to={props.link}>
              {props.name}
            </Link>
          </li>
        )
      }}
    />
  )
}
export default AppMenuItem
