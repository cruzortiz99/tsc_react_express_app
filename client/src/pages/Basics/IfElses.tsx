import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'

const IfElsesPage = (props: AppPagesProps) => (
  <AppContentStructure title='If-Else' {...props}>
    <AppContentTheory>
      <p>
        Permite crear diferentes caminos en la aplicación a partir de una
        condición, la cantidad de caminos es siempre dos. Si la condición se
        cumple o no. Para crear más caminos, se van uniendo a los caminos nuevas
        condiciones
      </p>
    </AppContentTheory>
    <AppContentCode type='js'>
      {
        '// Dos caminos\nvar number = 2;\nif (number >= 2) {\n console.log("Numero es mayor o igual a dos");\n} else {\n console.log("Numero es menor a dos");\n}'
      }
    </AppContentCode>
    <AppContentCode type='js'>
      {
        '// Mas de dos caminos\nvar number = 2;\nif (number > 2) {\n console.log("Numero es mayor a dos");\n} else if (number === 2) {\n console.log("Numero es igual a dos");\n} else {\n console.log("Numero es menor que dos");\n}'
      }
    </AppContentCode>
  </AppContentStructure>
)
export default React.memo(IfElsesPage, () => true)
