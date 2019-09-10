import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'
import AppHeader from '../../components/AppHeader/AppHeader'

const DatesC = (props: AppPagesProps) => {
  return (
    <AppContentStructure title='Fechas' {...props}>
      <AppContentTheory>
        <p>
          Las fechas, son estructuras de datos que se utilizan para representar
          el tiempo y un determinado momento. Las fechas (dependiendo del
          formato) pueden contemplar el dia, mes, año, hora, uso horario, país,
          entre otras cosas. Por defecto, JavaScript utiliza la información que
          posee el explorador sobre la hora y el uso horario
        </p>
        <p>
          Existen cuatro formas para obtener una fecha en JavaScript, utilizando
          el constructor
        </p>
        <AppContentCode type='js'>
          {
            '// Fecha actual:\nnew Date();\n// Fecha para un momento específico\nnew Date(year, month, day, hours, minutes, seconds, milliseconds);\n// Fecha para un momento específico usando milisegundos\nnew Date(milisegundos);\n//Fecha para un momento específico usando una cadena de texto\nnew Date("Fecha en texto");'
          }
        </AppContentCode>
        <AppHeader
          level={3}
          text='new Date(year, month, day, hours, minutes, seconds, milliseconds)'
        />
        <p>
          JavaScript cuenta los meses tomando a Enero como el mes 0, por lo
          tanto diciembre es el 11
        </p>
      </AppContentTheory>
    </AppContentStructure>
  )
}

export default DatesC
