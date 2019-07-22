import React, { useEffect, useState } from 'react'
import { Link, NavLink, match } from 'react-router-dom'
import './app-menu-item.css'

export interface AppMenuItemProps {
  link: string
  name: string
}

const AppMenuItem = (props: AppMenuItemProps) => {
  let [className, setClassName] = useState('app-menu-item app-menu-item-hover')
  useEffect(() => {}, [false])
  let isActive = (match: any, location: any) => {
    if (match) {
      setClassName('app-menu-item app-menu-clicked-link')
      return true
    }
    setClassName('app-menu-item app-menu-item-hover')
    return match
  }
  return (
    <li className={className}>
      <NavLink to={props.link} isActive={isActive} exact>
        {props.name}
      </NavLink>
    </li>
  )
}
export default AppMenuItem
