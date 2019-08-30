import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'

const ConditionsPage = (props: AppPagesProps) => (
  <AppContentStructure title='Condicionales' {...props}>
    <AppContentTheory>
      <p>
        Un proceso natural de cualquier tipo posee dos secciones
        características, las bifurcaciones y las iteraciones
      </p>
      <ul>
        <li>
          Las bifurcaciones, no son más que caminos que puede tomar o acciones
          que pueden ejecutarse en la aplicación dada una condición.
        </li>
        <li>
          Las iteraciones por otra parte, son flujos que se repiten una cantidad
          de veces hasta llegar a un estado en particular
        </li>
      </ul>
      <p>
        Por ejemplo, si se necesita que un elemento en la interfaz de la
        aplicación se vea o no, se utilizaría un condicional para que la
        aplicación entienda, que existen varios caminos a partir de un estado.
        Por otra parte, que pasa si necesitamos, por ejemplo, implementar algún
        tipo de contador o de cálculo arduo que amerite repetir una sección de
        código una cantidad de veces, bueno para este escenario necesitamos de
        los iteradores
      </p>
      <ul>
        Condicionales
        <li>If-else</li>
        <li>Switch-Case</li>
      </ul>
      <ul>
        Iteradores
        <li>For</li>
        <li>While</li>
      </ul>
    </AppContentTheory>
  </AppContentStructure>
)

export default React.memo(ConditionsPage, () => true)
