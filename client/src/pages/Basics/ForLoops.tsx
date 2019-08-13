import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'

export default (props: AppPagesProps) => (
  <AppContentStructure title='Ciclos for' {...props}>
    <AppContentTheory>
      <p>
        Los ciclos <strong>for</strong> son utilizados cuando la cantidad de
        itereaciones está definida, por ejemplo, hacer un contador hasta el diez
      </p>
    </AppContentTheory>
    <AppContentCode type='js'>
      {'for (let count=0; count<=10; count++) {\n console.log(count);\n}'}
    </AppContentCode>
    <AppContentTheory title='Arreglos'>
      <p>
        Los ciclos <strong>for</strong> son muy útiles para recorrer los
        arreglos. Y controlar el inicio, fin e incluso el sentido del recorrido
      </p>
    </AppContentTheory>
    <AppContentCode type='js'>
      {
        'var arreglo = [1, 2, 3];\nfor (let index = 0; index < arreglo.length; index++ ) {\n console.log(arreglo[index]);\n}'
      }
    </AppContentCode>
    <AppContentTheory title='For In'>
      <p>
        En JavaScript existen maneras resumidas (syntax sugar) de escribir los
        ciclos <strong>for</strong>. Los <strong>For In</strong> sirven para
        recorrer las características de los objetos
      </p>
    </AppContentTheory>
    <AppContentCode type='js'>
      {
        'var person = {name: "Cruz", apellido: "Ortiz", edad: 27}\nfor (let attr in person) {\n console.log(attr);\n console.log(person[attr]);\n}'
      }
    </AppContentCode>
    <AppContentTheory title='For of'></AppContentTheory>
  </AppContentStructure>
)
