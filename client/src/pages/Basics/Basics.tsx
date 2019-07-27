import React from 'react'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentCode from '../../components/AppContentCode/AppContentCode'
import AppContentExample from '../../components/AppContentExample/AppContentExample'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import { AppPagesProps } from '../AppPages'

const Introduction = (props: AppPagesProps) => {
  const title = 'Introducción'
  const paragraphs = (
    <AppContentTheory>
      Esto es el curso para principiantes en JavaScript
    </AppContentTheory>
  )
  const example = <AppContentExample>Example</AppContentExample>
  const codeCss = (
    <AppContentCode type="css">
      {`.hola-mundo{
/** ... */
}`}
    </AppContentCode>
  )
  const codeJs = (
    <AppContentCode type="js">console.log('Hola Mundo')</AppContentCode>
  )
  const codeHtml = (
    <AppContentCode type="html">
      {`<h1> Hola Mundo </h1>'`}
    </AppContentCode>
  )
  const codeDefault = (
    <AppContentCode type="default">
    {`Hola mundo`}
    </AppContentCode>
  )
  return (
    <AppContentStructure
      title={title}
      prevRoute={props.prevRoute}
      nextRoute={props.nextRoute}
      {...props}
    >
      {paragraphs}
      {example}
      {codeCss}
      {codeJs}
      {codeHtml}
      {codeDefault}
    </AppContentStructure>
  )
}
export default Introduction
