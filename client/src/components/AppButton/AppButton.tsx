import React from 'react'
import classes from './app-button.css'
export interface AppButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const AppButton = (props: AppButtonProps) => {
  return (
    <button
      className={props.className || classes.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default AppButton
