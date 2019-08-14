import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'

const WhileLoopsPage = (props: AppPagesProps) => (
  <AppContentStructure title='Ciclos While' {...props}>
    <AppContentTheory>
      <p>
        Ahora bien, los ciclos <strong>for</strong> son excelentes para recorrer
        arreglos, objetos y realizar iteraciones controladas, pero que pasa
        cuando necesitamos realizar iteraciones dadas una condición
      </p>
      <p>
        Por ejemplo, se necesita que se realice el incremento de un contador
        hasta que una condición indique lo contrario, por ejemplo una ecuación.
        Para esos casos existe, el ciclo <strong>while</strong>
      </p>
    </AppContentTheory>
    <AppContentCode type='js'>
      {
        'var condition = true;\nvar count = 0;\nwhile(condition) {\n count++;\n condition = !(count * 3 >= 10); \n}'
      }
    </AppContentCode>
    <AppContentTheory title='Do-while'>
      <p>
        En un ciclo <strong>while</strong> la condición es evaluada primero y
        luego se realiza el proceso dentro de la iteración. Esto a diferencia
        del ciclo <strong>for</strong>, en donde la comparación se realiza
        después.
      </p>
      <p>
        Sin embargo, para ellos existe el ciclo <strong>do-while</strong>, el
        cual tiene las mismas características de ciclo while, con la diferencia
        de que el proceso, si se ejecuta primero que la condición
      </p>
    </AppContentTheory>
    <AppContentCode type='js'>
      {
        'var condition = true;\nvar count = 0;\ndo {\n count++;\n condition = !(count * 3 >= 10); \n} while(condition)'
      }
    </AppContentCode>
    <AppContentTheory title='Advertencia'>
      <p>
        Si bien los ciclos <strong>while</strong> y <strong>do-while</strong>{' '}
        son muy útiles, se les aconseja siempre tener precaución con ellos y que
        se intente resolver lo más posible con los ciclos <strong>for</strong>
      </p>
      <p>
        Esto se debe a que poseen menor control de la cantidad de iteraciones y
        puede llevar a que la aplicación consuma mayor capacidad de
        procesamiento e inclusive ciclos infinitos que ocasionan que la
        aplicación pueda perjudicar al computador
      </p>
    </AppContentTheory>
  </AppContentStructure>
)
export default React.memo(WhileLoopsPage, () => true)
