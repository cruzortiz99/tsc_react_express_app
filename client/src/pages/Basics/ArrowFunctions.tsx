import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'

export default (props: AppPagesProps) => {
  return (
    <AppContentStructure
      title='Funciones Arrow o Flecha'
      {...props}
    ></AppContentStructure>
  )
}
