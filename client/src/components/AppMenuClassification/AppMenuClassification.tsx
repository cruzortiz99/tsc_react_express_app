import React, { useEffect } from 'react'
import AppMenuItem, { AppMenuItemProps } from '../AppMenuItem/AppMenuItem'
import AppHeader from '../AppHeader/AppHeader'
import './app-menu-classifications.css'

export interface AppMenuClassificationProps {
  name?: string
  level?: number
  path: string
  routes?: Array<AppMenuClassificationProps>
}

const AppMenuClassification = (props: AppMenuClassificationProps) => {
  const level = props.level || 1
}

export default AppMenuClassification
