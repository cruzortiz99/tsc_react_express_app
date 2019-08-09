import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'

export default (props: AppPagesProps) => {
  return (
    <AppContentStructure
      title='Operaciones'
      nextRoute={props.nextRoute}
      prevRoute={props.prevRoute}
      {...props}
    ></AppContentStructure>
  )
}
