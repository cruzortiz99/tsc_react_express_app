import React from 'react'
import './app-header.css'
export interface AppHeaderProps {
  text: string | number
  level?: number
}
const AppHeader = (props: AppHeaderProps) => {
  let level = props.level || 0
  let className = level < 3 ? 'app-header-uppercase' : 'app-header-capitalize'
  return React.createElement(
    `h${level + 1}`,
    {
      className
    },
    props.text
  )
}
export default AppHeader
