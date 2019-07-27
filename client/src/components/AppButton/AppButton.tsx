import React from 'react'
import './app-button.css'
export interface AppButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const AppButton = (props: AppButtonProps) => {
  return (
    <button
      className={props.className || 'app-content-nav-button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default AppButton
