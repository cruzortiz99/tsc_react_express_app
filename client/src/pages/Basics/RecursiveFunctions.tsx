import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'

export default (props: AppPagesProps) => (
  <AppContentStructure title='Funciones recursivas' {...props}>
    <AppContentTheory>
      <p>
        Las funciones recursivas son aquellas funciones que dentro de su proceso
        o de sus caminos, se llama a si misma
      </p>
    </AppContentTheory>
  </AppContentStructure>
)
