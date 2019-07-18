import React from 'react'
import AppContentStructure from '../components/AppContentStructure'

const Introduction = () => {
  let title = 'Introducción'
  let paragraphs = (
    <React.Fragment>
      Esto es el curso para principiantes en JavaScript
    </React.Fragment>
  )
  let example = <React.Fragment>Example</React.Fragment>
  let code = <React.Fragment>Code</React.Fragment>
  return (
    <AppContentStructure
      title={title}
      paragraphs={paragraphs}
      example={example}
      code={code}
    />
  )
}
export default Introduction
