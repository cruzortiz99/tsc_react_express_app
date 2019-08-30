import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'

const SwitchCasesPage = (props: AppPagesProps) => (
  <AppContentStructure title='Switch-Case' {...props}>
    <AppContentTheory>
      <p>
        Usar If-else resulta muy bueno para representar las divisiones de
        caminos o bifurcaciones. Pero que pasa en el caso de que tenemos una
        condición que puede tener un numero finito de opciones pero es mayor a
        dos, pues resulta mucho más difícil de entender o de leer el código que
        se escribe
      </p>
    </AppContentTheory>
    <AppContentCode type='js'>
      {
        'var number = 3;\nif (number === 0) {\n // Ejecuta solo esto\n} else if (number === 1) {\n // Ejecuta solo esto\n} else if (number === 2) {\n // Ejecuta solo esto\n}\n// etc...'
      }
    </AppContentCode>
    <AppContentTheory>
      <p>
        Para ello está el Switch-Case, sirve mucho para mejorar la lectura del
        código cuando el número de caminos de las bifurcaciones es conocido
      </p>
    </AppContentTheory>
    <AppContentCode type='js'>
      {
        'var number = x;\nswitch(number) {\n case 1:\n  // Ejecuta solo esto\n  break;\n case 2:\n  // Ejecuta solo esto\n  break;\n default:\n  // Ejecuta por defecto\n}'
      }
    </AppContentCode>
  </AppContentStructure>
)
export default React.memo(SwitchCasesPage, () => true)
