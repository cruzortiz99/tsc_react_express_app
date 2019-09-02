import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'

const Advance = (props: AppPagesProps) => {
  return (
    <AppContentStructure title='Avanzado' {...props}>
      <AppContentTheory title='¡Felicitaciones Has Avanzado!'>
        <p>
          Ya posees los conocimientos suficiente para comenzar a desarrollar
          paginas web, aplicaciones o cualquier proyecto propio.{' '}
          <strong>¡No lo olvides!</strong> practica todo lo que aprendas para
          sentirte comodo con lo que haces y puedas mejorar cada dia más
        </p>
        <p>
          En esta sección te daremos a conocer aquellos avances en el mundo de
          desarrollo con JavaScript. Estos avances, son los más reconocidos para
          el desarrollo tanto de interfaces como de servidores
        </p>
      </AppContentTheory>
    </AppContentStructure>
  )
}

export default Advance
