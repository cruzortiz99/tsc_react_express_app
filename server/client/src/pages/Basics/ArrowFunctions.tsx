import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'

const ArrowFunctionsPage = (props: AppPagesProps) => {
  return (
    <AppContentStructure title='Funciones Arrow o Flecha' {...props}>
      <AppContentTheory>
        <p>
          Para comprender la necesidad de las funciones arrow, primero hay que
          entender la palabra clave <strong>this</strong> y como se involucra
          con las funciones
        </p>
      </AppContentTheory>
      <AppContentTheory title='this'>
        <p>Esta palabra clave refiere al objeto que lo contiene</p>
        <ul>
          <li>Si es un método refiere al objeto que posee el método</li>
          <li>Si está solo, se refiere al contexto global</li>
          <li>Si es una función refiere al contexto global</li>
          <li>En un evento, refiere al elemento que recibe el evento</li>
        </ul>
        <p>
          Bastante complejo ¿ no ?, es por ello que las funciones arrow se
          introdujeron en ES6. Dentro de una función arrow,
          <strong>this</strong> refiere a quien hace la definición de la
          función, ya sea un objeto de la aplicación, window, document o
          cualquiera
        </p>
        <p>
          Hay otras ventajas de la función arrow, y es que permite resumir mucho
          el código que se utiliza para realizar una acción
        </p>
      </AppContentTheory>
      <AppContentCode type='js'>
        {
          '// Sin funcion arrow\nfunction suma (a, b) {\n return a + b;\n}\n\n// Con funcion arrow\nconst suma = (a, b) => a + b'
        }
      </AppContentCode>
      <AppContentTheory>
        <p>
          Se recomienda usar por defecto las funciones arrow, a menos que se
          presente un escenario en el que no puedan por algunas limitaciones de
          alguna librería o framework
        </p>
      </AppContentTheory>
    </AppContentStructure>
  )
}

export default React.memo(ArrowFunctionsPage, () => true)
