import React from 'react'
import { Link } from 'react-router-dom'
import './app-menu-item.css'

export interface AppMenuItemProps {
  link: string
  name: string
}

const AppMenuItem = (props: AppMenuItemProps) => {
  return (
    <li className="app-menu-item">
      <Link to={props.link}>{props.name}</Link>
    </li>
  )
}
export default AppMenuItem
