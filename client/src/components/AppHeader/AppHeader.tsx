import React from 'react'
export interface AppHeaderProps {
  text: string | number
  level?: number
}
const AppHeader = (props: AppHeaderProps) => {
  switch (props.level) {
    case 2:
      return <h2>{props.text}</h2>
    case 3:
      return <h3>{props.text}</h3>
    case 4:
      return <h4>{props.text}</h4>
    case 5:
      return <h5>{props.text}</h5>
    case 6:
      return <h6>{props.text}</h6>
    default:
      return <h1>{props.text}</h1>
  }
}
export default AppHeader
