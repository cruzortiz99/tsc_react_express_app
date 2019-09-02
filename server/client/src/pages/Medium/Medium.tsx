import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'

const Medium = (props: AppPagesProps) => {
  return (
    <AppContentStructure title='Intermedio' {...props}>
      <AppContentTheory title='¡Felicitaciones Has Avanzado!'>
        <p>
          Ya posees los conocimientos básicos que todo programador debe tener.
          No solo para JavaScript, sino para cualquier lenguaje de programación
        </p>
        <p>
          Es momento de adentrarnos más en el lenguaje, en sus funciones y
          estructuras pre-construidas que facilitán la construcción de páginas,
          programas o cualquier proyecto en general
        </p>
        <p>
          Esta etapa requiere práctica, y depende de uds como nuevos
          desarrolladores aplicar estos conocimientos en sus proyectos.
          <strong>
            ¡NO REINVENTES LA RUEDA, APROVECHA LO QUE <i>JAVASCRIPT</i> TE
            OFRECE!
          </strong>
        </p>
      </AppContentTheory>
    </AppContentStructure>
  )
}

export default Medium
