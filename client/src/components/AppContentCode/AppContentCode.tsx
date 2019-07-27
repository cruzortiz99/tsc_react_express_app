import React, { ReactNode } from 'react'
import './app-content-code.css'
export interface AppContentCodeProps {
  type: 'css' | 'js' | 'html' | string
  children?: ReactNode
}
const AppContentCode = (props: AppContentCodeProps) => {
  const codeColor = (
    type: 'css' | 'js' | 'html' | string,
    basicClassName: string
  ) => {
    switch (type) {
      case 'css':
        return `${basicClassName} css`
      case 'js':
        return `${basicClassName} js`
      case 'html':
        return `${basicClassName} html`
      default:
        return `${basicClassName} default`
    }
  }
  return (
    <pre className="app-content-code">
      <div className={codeColor(props.type, 'label')}>
        {props.type.toUpperCase()}
      </div>
      <code className={codeColor(props.type, 'code')}>{props.children}</code>
    </pre>
  )
}
export default AppContentCode
