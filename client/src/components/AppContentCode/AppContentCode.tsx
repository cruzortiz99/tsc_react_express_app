import React from 'react'
import classes from './app-content-code.css'
export interface AppContentCodeProps {
  type: 'css' | 'js' | 'html' | string
  children?: string
}
const AppContentCode = (props: AppContentCodeProps) => {
  const codeColor = (
    type: 'css' | 'js' | 'html' | string,
    basicClassName: string
  ) => {
    let className: [string, string] | [] = []
    switch (type) {
      case 'css':
        className = [basicClassName, classes.css]
        break
      case 'js':
        className = [basicClassName, classes.js]
        break
      case 'html':
        className = [basicClassName, classes.html]
        break
      default:
        className = [basicClassName, classes.default]
    }
    return className.join(' ')
  }
  return (
    <pre className={classes.code}>
      <div className={codeColor(props.type, classes.label)}>
        {props.type.toUpperCase()}
      </div>
      <code className={codeColor(props.type, classes.insideCode)}>
        {props.children}
      </code>
    </pre>
  )
}
export default AppContentCode
