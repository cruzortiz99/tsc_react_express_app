import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'

export default (props: AppPagesProps) => {
  return (
    <AppContentStructure title='Funciones' {...props}>
      <AppContentTheory>
        <p>
          Las funciones en JavaScript son elementos de primer orden, es decir,
          al igual que las variables se pueden declarar y utilizar de manera
          directa, a diferencia de Java, en donde las funciones deben ser
          establecidas con métodos de alguna clase u objeto
        </p>
        <p>
          JavaScript posee varias maneras de definir una función, pero
          esencialmente realizan la misma operación, contener procesos
          reutilizables de la aplicación
        </p>
      </AppContentTheory>
      <AppContentCode type='js'>
        {
          '// Primera forma\nfunction suma (a, b) {\n return a + b;\n}\n\n// Segunda forma\nvar suma = function (a, b) {\n return a + b;\n}'
        }
      </AppContentCode>
      <AppContentTheory>
        <p>
          Con el estándar de ES6, se incorpora una nueva forma de declarar las
          funciones que son las funciones arrow
        </p>
      </AppContentTheory>
    </AppContentStructure>
  )
}
