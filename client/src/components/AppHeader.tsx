import React from 'react'
export interface AppHeaderProps {
  text: string | number
}
const AppHeader = (props: AppHeaderProps) => <h1>{props.text}</h1>
export default AppHeader
