import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'
import AppHeader from '../../components/AppHeader/AppHeader'
interface GetMethodsType {
  [name: string]: string
}
const DatesC = (props: AppPagesProps) => {
  const getMethods: GetMethodsType = {
    getFullYear: 'Obtienes el año de la fecha en cuatro dígitos(yyyy)',
    getMonth: 'Obtienes el número del mes (0-11)',
    getDate: 'Obtienes el dia como un número (1-31)',
    getHours: 'Obtienes las horas (0-23)',
    getMinutes: 'Obtienes los minutos (0-59)',
    getSeconds: 'Obtienes los segundos (0-59)',
    getMilliseconds: 'Obtienes los milisegundos (0-999)',
    getTime: 'Obtienes la fecha en milisegundos desde 1 de Enero de 1970',
    getDay: 'Obtienes el dia de la semana (0-6)',
    'Date.now': 'Obtienes la fecha actual'
  }
  const getMethodTable = []
  for (const key in getMethods) {
    getMethodTable.push(
      <tr key={key}>
        <td>{key}()</td>
        <td>{getMethods[key]}</td>
      </tr>
    )
  }
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
        <p>Para este constructor las fechas inician desde los 19xx</p>
        <AppContentCode type='js'>
          {'var date = new Date(99,1,24)\n>> 1999-2-24'}
        </AppContentCode>
        <AppHeader level={3} text='Usando una cadena de texto' />
        <p>
          JavaScript, intentará reconocer la cadena de texto mediante
          estructuras de fechas estándares
        </p>
        <AppContentCode type='js'>
          {
            'var date = new Date("October 13, 2014 11:13:00")\n>> Mon Oct 13 2014 11:13:00 GMT-0430 (hora de Venezuela)'
          }
        </AppContentCode>
        <AppHeader level={3} text='Usando los milisegundos' />
        <p>
          Al especificar en el constructor los milisegundos, la fecha comienza a
          sumarse a la básica que es el 31 de diciembre de 1969 a las 8 pm{' '}
        </p>
        <AppContentCode type='js'>
          {
            'var d = new Date(0)\n>> Wed Dec 31 1969 20:00:00 GMT-0400 (hora de Venezuela)\n'
          }
        </AppContentCode>
        <AppHeader level={3} text='Método toString' />
        <p>
          Como la mayoría de los tipos de datos en JavaScript, las fechas
          también poseen el método <strong>toString</strong>. Lo que realiza
          este método es entregar la fecha en forma de texto
        </p>
        <AppHeader level={3} text='Método toUTCString y toDateString' />
        <p>
          Este método, transforma la fecha en texto de formato UTC, el cual es
          un estándar para la presentación de las fechas
        </p>
        <p>
          El método <strong>toDateString</strong> transforma la fecha a una
          cadena de texto más legible
        </p>
        <AppHeader level={3} text='Formatos de las fechas' />
        <p>JavaScript posee tres estándares para las fechas</p>
        <ul>
          <li>
            ISO: <q>2015-03-25</q>
          </li>
          <li>
            Fecha corta: <q>03/25/2015</q>
          </li>
          <li>
            Fecha larga: <q>Mar 25 2015</q> o <q>25 Mar 2015</q>
          </li>
        </ul>
        <AppHeader level={3} text='Parser (Conversor)' />
        <p>
          Si posees un texto que represente una fecha válida, puedes obtener los
          milisegundos correspondientes usando el método <strong>parse</strong>
        </p>
        <AppContentCode type='js'>
          {
            'var milisec = Date.parse("Jan 1, 2015")\nnew Date(milisec)\n>> Thu Jan 01 2015 00:00:00 GMT-0430 (hora de Venezuela)'
          }
        </AppContentCode>
        <AppHeader
          level={3}
          text='Métodos para obtener información de la fecha'
        />
        <table>
          <thead>
            <tr>
              <th>Método</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>{getMethodTable}</tbody>
        </table>
      </AppContentTheory>
    </AppContentStructure>
  )
}

export default DatesC
