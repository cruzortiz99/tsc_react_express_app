import React, { useEffect, useState } from 'react'
import { Link, NavLink, match } from 'react-router-dom'
import './app-menu-item.css'

export interface AppMenuItemProps {
  link: string
  name: string
  level?: number
}

const AppMenuItem = (props: AppMenuItemProps) => {
  let [className, setClassName] = useState('app-menu-item-hover')
  let level = props.level || 1
  let isActive = (match: any, location: any) => {
    if (match) {
      setClassName('app-menu-clicked-link')
      return true
    }
    setClassName('app-menu-item-hover')
    return match
  }
  return (
    <NavLink
      className="app-menu-item"
      to={props.link}
      isActive={isActive}
      exact
    >
      <li className={className} style={{ paddingLeft: `${10 * level}px` }}>
        {props.name}
      </li>
    </NavLink>
  )
}
export default AppMenuItem
