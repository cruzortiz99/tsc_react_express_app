import React from 'react'
import classes from './app-button.css'

const AppButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={props.className || classes.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
export default React.memo(AppButton)
