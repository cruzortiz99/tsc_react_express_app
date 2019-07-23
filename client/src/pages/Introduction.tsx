import React from 'react'
import AppContentStructure from '../components/AppContentStructure/AppContentStructure'
import AppContentCode from '../components/AppContentCode/AppContentCode'
import AppContentExample from '../components/AppContentExample/AppContentExample'
import AppContentTheory from '../components/AppContentTheory/AppContentTheory'

const Introduction = () => {
  let title = 'Introducción'
  let paragraphs = (
    <AppContentTheory>
      Esto es el curso para principiantes en JavaScript
    </AppContentTheory>
  )
  let example = <AppContentExample>Example</AppContentExample>
  let code = <AppContentCode>Code</AppContentCode>
  return (
    <AppContentStructure title={title}>
      {paragraphs}
      {example}
      {code}
    </AppContentStructure>
  )
}
export default Introduction
