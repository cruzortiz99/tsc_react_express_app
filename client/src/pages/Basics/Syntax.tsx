import React from 'react'
import { AppPagesProps } from '../AppPages.d'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'

const SyntaxJs = (props: AppPagesProps) => {
  return (
    <AppContentStructure title="Syntax" {...props}>
      <AppContentTheory title="Numbers">Numbers</AppContentTheory>
      <AppContentTheory title="Strings">Strings</AppContentTheory>
      <AppContentTheory title="Variables">Variables</AppContentTheory>
      <AppContentTheory title="Operadores">Operadores</AppContentTheory>
      <AppContentTheory title="Expresiones">Expresiones</AppContentTheory>
      <AppContentTheory title="Palabras Claves">
        Palabras Claves
      </AppContentTheory>
      <AppContentTheory title="JavaScript y Camel Case">
        JS y Camel Case
      </AppContentTheory>
    </AppContentStructure>
  )
}
export default SyntaxJs
