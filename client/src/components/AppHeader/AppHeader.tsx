import React from 'react'
import './app-header.css'
export interface AppHeaderProps {
  text: string | number
  level?: number
}
const AppHeader = (props: AppHeaderProps) => {
  switch (props.level) {
    case 2:
      return <h2 className="app-header-uppercase">{props.text}</h2>
    case 3:
      return <h3 className="app-header-uppercase">{props.text}</h3>
    case 4:
      return <h4 className="app-header-capitalize">{props.text}</h4>
    case 5:
      return <h5 className="app-header-capitalize">{props.text}</h5>
    case 6:
      return <h6 className="app-header-capitalize">{props.text}</h6>
    default:
      return <h1 className="app-header-uppercase">{props.text}</h1>
  }
}
export default AppHeader
