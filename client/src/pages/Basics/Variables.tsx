import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentCode from '../../components/AppContentCode/AppContentCode'

export default (props: AppPagesProps) => {
  return (
    <AppContentStructure
      nextRoute={props.nextRoute}
      prevRoute={props.prevRoute}
      title='Variables'
      {...props}
    >
      <p>
        Las variables son la clave en todos los programas, sin importar en que
        lenguaje se esté programando. Las variables son espacios de memoria que
        utiliza el programa para ejecutarse de manera correcta.
      </p>
      <p>
        Un buen uso de las variables llevan a un buen uso de la memoria y por lo
        tanto puede que el programa desarrollado se desempeñe mejor en
        diferentes equipos.
      </p>
      <p>
        Javascript es de tipificado dinámico, es decir, Javascript interpreta lo
        que se escribe y como se utiliza y asigna los espacios de memoria
        correspondientes, a diferencia de lenguajes fuertemente tipificados como
        C/C++ o Java.
      </p>
      <p>
        No obstante, Javascript posee diferentes maneras de definir una
        variable, dependiendo del contexto o el uso de la variable. Estas formas
        provienen de la actualización del estándar que rige a Javascript (ES6).
      </p>
      <table>
        <thead>
          <tr>
            <th>Keyword</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>var</td>
            <td>
              Usado para variables globales. Era la manera en la que Javascript
              definía las variables
            </td>
          </tr>
          <tr>
            <td>const</td>
            <td>
              Proviene del estándar ES6, se utiliza para declarár constantes en
              el código, es decir, variables que una vez asignadas no cambian
            </td>
          </tr>
          <tr>
            <td>let</td>
            <td>
              Proviene del estándar ES6, se utiliza para declarár variables en
              el código, es decir, espacios de memoria destinados a ser
              reasignados con el tiempo
            </td>
          </tr>
        </tbody>
      </table>
      <AppContentCode type='js'>
        {
          'var a = 2; // con la intención de que sea global\nconst B = "hola mundo"; // con la intención de que no cambie\nlet c = 256256; // con la intención de que si varíe con el tiempo'
        }
      </AppContentCode>
    </AppContentStructure>
  )
}
