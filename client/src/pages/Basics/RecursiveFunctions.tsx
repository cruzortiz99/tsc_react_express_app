import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'

const RecursiveFunctionsPage = (props: AppPagesProps) => (
  <AppContentStructure title='Funciones recursivas' {...props}>
    <AppContentTheory>
      <p>
        Las funciones recursivas son aquellas funciones que dentro de su proceso
        o de sus caminos, se llama a si misma
      </p>
    </AppContentTheory>
    <AppContentCode type='js'>
      {
        'function suma (a, b, c) {\n if (a + b + c <= 10) {\n  suma (a, b, a + b);\n }\n return a + b;\n}'
      }
    </AppContentCode>
    <AppContentTheory title='Advertencia'>
      <p>
        Al igual que los ciclos <strong>while</strong> y{' '}
        <strong>do-while</strong> se recomienda su uso con precaución, y de ser
        posible resolver la mayoría de los casos con ciclos <strong>for</strong>
      </p>
      <p>
        Tiene las mismas consecuencias negativas, es por ello que las funciones
        recursivas debe tener una bifurcación que bajo cierta condición corte la
        recursividad
      </p>
    </AppContentTheory>
  </AppContentStructure>
)
export default React.memo(RecursiveFunctionsPage, () => true)
