import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'

export default (props: AppPagesProps) => {
  return <AppContentStructure title='Comentarios' nextRoute={props.nextRoute} prevRoute={props.prevRoute} {...props}>
    <AppContentTheory>
      <p>
        Los comentarios son muy útiles para dar contexto sobre el porque de las funciones o del código en general. Hay que tener en consideración que el comentario que se agregue al código hay que mantenerlo. Por lo que el código debería ser lo suficientemente expresivo para requerir la menor cantidad de comentario.
      </p>
    </AppContentTheory>
  </AppContentStructure>
}
