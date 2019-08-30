import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'

const HoistingPage = (props: AppPagesProps) => {
  return (
    <AppContentStructure title='Hoisting' {...props}>
      <AppContentTheory>
        <p>
          En Javascript la declaración y la asignación de variables puede
          ocurrir después del uso de la misma el en archivo.
        </p>
        <p>
          Javascript sobre escribe el flujo natural del documento. Colocando en
          primer lugar siempre las declaraciones, luego las asignaciones y de
          ultimo las ejecuciones de funciones u operaciones
        </p>
        <p>
          No obstante, a pesar de esta funcionalidad de Javascript, se
          recomienda siempre seguir el flujo natural de lectura, es decir, de
          arriba a abajo y de izquierda a derecha
        </p>
      </AppContentTheory>
      <AppContentCode type='js'>
        {
          '// Esto está bien\nx = 5; // Asignación\nsuma(5,x); // Uso\nvar x; // Declaración'
        }
      </AppContentCode>
      <AppContentCode type='js'>
        {
          '// Esta es la mejor práctica\nvar x = 5; // Declaración y asignación\nsuma(5,x); // Uso'
        }
      </AppContentCode>
    </AppContentStructure>
  )
}
export default React.memo(HoistingPage, () => true)
