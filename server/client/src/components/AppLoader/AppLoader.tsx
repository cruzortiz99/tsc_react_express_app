import React from 'react'
import classes from './app-loader.css'
export interface AppLoaderProps {
  coreColor?: string
  electronXColor?: string
  electronYColor?: string
  electronZColor?: string
}
const AppLoader = (props: AppLoaderProps) => {
  const style = {
    core: {
      backgroundColor: props.coreColor || 'gray'
    },
    electronX: {
      borderTopColor: props.electronXColor || 'gray'
    },
    electronY: {
      borderTopColor: props.electronYColor || 'gray'
    },
    electronZ: {
      borderTopColor: props.electronZColor || 'gray'
    }
  }
  return (
    <div className={classes.loader}>
      <div className={classes.core} style={style.core}>
        <div
          className={[classes.electron, classes.rotateX].join(' ')}
          style={style.electronX}
        ></div>
        <div
          className={[classes.electron, classes.rotateY].join(' ')}
          style={style.electronY}
        ></div>
        <div
          className={[classes.electron, classes.rotateZ].join(' ')}
          style={style.electronZ}
        ></div>
      </div>
    </div>
  )
}
export default AppLoader
