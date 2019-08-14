import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'

const LoopsPage = (props: AppPagesProps) => (
  <AppContentStructure title='Ciclos' {...props}>
    <AppContentTheory>
      <p>
        Los ciclos son importantes al momento de realizar una aplicación,
        permiten repetir procesos comunes una cantidad de veces específica o
        dependiendo de una condición. Los ciclos también son muy útiles para
        recorrer arreglos o matrices
      </p>
      <p>
        Dependiendo del lenguaje existen maneras de realizar los ciclos, en
        JavaScript tenemos las siguientes
      </p>
      <ul>
        <li>For</li>
        <li>While</li>
        <li>Funciones recursivas</li>
      </ul>
    </AppContentTheory>
  </AppContentStructure>
)
export default React.memo(LoopsPage, () => true)
