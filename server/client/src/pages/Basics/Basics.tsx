import React, { useState } from 'react'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentCode from '../../components/AppContentCode/AppContentCode'
import AppContentExample from '../../components/AppContentExample/AppContentExample'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import { AppPagesProps } from '../AppPages'

const BasicsPage = (props: AppPagesProps) => {
  const [displayHolaMundo, setDisplayHolaMundo] = useState('none')
  const title = 'Introducción'

  return (
    <AppContentStructure
      title={title}
      prevRoute={props.prevRoute}
      nextRoute={props.nextRoute}
      {...props}
    >
      <AppContentExample boxName='Ejemplo'>
        <div>
          <p style={{ display: displayHolaMundo }}>Hola Mundo</p>
          <button
            onClick={() => {
              setDisplayHolaMundo(prevState => {
                return prevState === 'none' ? 'block' : 'none'
              })
            }}
          >
            {displayHolaMundo === 'none' ? 'Mostrar' : 'Ocultar'}
          </button>
        </div>
      </AppContentExample>
      <AppContentTheory>
        <p>
          JavaScript es el lenguaje de la Web, es lo que permite a las paginas
          webs pasar de ser estáticas a ser páginas dinámicas o aplicaciones
          webs. Ofrece muchas ventajas aprender javascript:
        </p>
        <ul>
          <li>Fácil de aprender</li>
          <li>
            Sigue evolucionando, añadiendo funcionalidades y mejorando la
            experiencia del desarrollador
          </li>
          <li>
            Es el lenguaje que utiliza la web, si quieres desarrollar web
            necesitas JS
          </li>
          <li>La comunidad tiene tendencia open source</li>
          <li>La cantidad de librerías y frameworks crece</li>
          <li>Posee una gran comunidad que se expande</li>
        </ul>
      </AppContentTheory>
      <AppContentCode type='html'>
        {`<p id="paragraph" style="{display: 'none'}"> Hola Mundo </p>'
<button id="button" on-click="showParagraph()"> Mostrar </button>`}
      </AppContentCode>
      <AppContentCode type='js'>
        {`function showParagraph () {
    var paragraph = document.getElementById('paragraph')
    var currentDisplayValue =  paragraph.style.display
    paragraph.style.display = (currentDisplayValue === 'none') ? 'block' : 'none'
    var button = document.getElementById('button')
    console.log(currentDisplayValue)
    button.innerText = (currentDisplayValue !== 'none') ? 'Mostrar' :  'Ocultar'\n}`}
      </AppContentCode>
    </AppContentStructure>
  )
}
export default BasicsPage
