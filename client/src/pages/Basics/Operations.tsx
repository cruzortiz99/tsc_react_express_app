import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'

export default (props: AppPagesProps) => {
  return (
    <AppContentStructure
      title='Operaciones'
      nextRoute={props.nextRoute}
      prevRoute={props.prevRoute}
      {...props}
    >
      <AppContentTheory>
        <p>
          Son todas las acciones matemáticas o lógicas que se desea que el
          script o programa ejecute.
        </p>
        <p>Entre algunas de las operaciones tenemos</p>
        <table>
          <thead>
            <tr>
              <th>Matemática</th>
              <th>Lógica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Suma (+)</td>
              <td>Or (| o ||)</td>
            </tr>
            <tr>
              <td>Resta (-)</td>
              <td>And (& o &&)</td>
            </tr>
            <tr>
              <td>Multiplicación (*)</td>
              <td>Not (~ o !)</td>
            </tr>
            <tr>
              <td>División (/)</td>
              <td>Xor (^)</td>
            </tr>
            <tr>
              <td>Potencia (**)</td>
              <td>Igualdad (== o ===)</td>
            </tr>
            <tr>
              <td>Asignación (=)</td>
              <td>Desigualdad (!= o !==)</td>
            </tr>
            <tr>
              <td>Modulo (%)</td>
              <td>Mayor y menor ({'< o >'})</td>
            </tr>
          </tbody>
        </table>
      </AppContentTheory>
      <AppContentCode type='js'>
        {
          'var a = true;\nvar b = false;\na && b; // false\na || b; //true\n!a; // false\na ^ b; //true\na === b; // false'
        }
      </AppContentCode>
    </AppContentStructure>
  )
}
