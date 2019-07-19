import React from 'react'
import { Link } from 'react-router-dom'

export interface AppMenuItemProps {
  link: string
  name: string
}

const AppMenuItem = (props: AppMenuItemProps) => {
  return (
    <li>
      <Link to={props.link}>{props.name}</Link>
    </li>
  )
}
export default AppMenuItem
