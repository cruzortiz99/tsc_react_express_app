import React from 'react'
type AppHeaderProps = {
  text: string | number
}
const AppHeader = (props: AppHeaderProps) => <h1>{props.text}</h1>
export default AppHeader
