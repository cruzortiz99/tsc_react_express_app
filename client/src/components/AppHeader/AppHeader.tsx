import React from 'react'
import classes from './app-header.css'
export interface AppHeaderProps {
  text: string | number
  level?: number
}
const AppHeader = React.memo((props: AppHeaderProps) => {
  const level = props.level || 0
  const component = level > 5 ? 'h6' : `h${level + 1}`
  const className = level < 3 ? classes.uppercase : classes.capitalize
  return React.createElement(
    component,
    {
      className
    },
    props.text
  )
})
export default React.memo(AppHeader, () => true)
