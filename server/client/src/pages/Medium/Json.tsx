import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'

const JsonC = (props: AppPagesProps) => (
  <AppContentStructure {...props} title='Json'>
    <AppContentTheory>
      <p>
        Json es el acrónimo de la notación de los objetos en JavaScript
        (JavaScript Object Notation), es una manera que existe para representar
        datos de cualquier tipo
      </p>
      <p>
        La estandarización de las representaciones de los datos es muy
        importante ya que permite que diferentes aplicaciones hablen el mismo
        idioma, pero no solo saber que forma va a tener los datos o la
        estructura de los mismos, sino el formato también permite que diferentes
        aplicaciones puedan comunicarse entre si
      </p>
      <p>
        Otro formato utilizado para la transmisión de datos y que tambien es
        bastante conocido es XML. Tanto Json como XML permiten realizar las
        misma actividades la diferencias principal es el formato en el que lo
        expresan (.json y .xml)
      </p>
      <AppContentCode type='json'>
        {`// Datos en formato Json
{
  "string": "hola",
  "number": 123,
  "array": [],
  "object": {}
}`}
      </AppContentCode>
      <p>
        Como se puede observar, los datos en Json resultan ser muy similares a
        crear un objeto de forma directa en JavaScript (por eso su nombre).El
        formato XML permite representar estos mismos datos con etiquetas algo
        parecido al HTML
      </p>
      <p>
        A diferencia de un objeto creado en un archivo de JavaScript, los
        archivos Json no admiten comentarios de ningún tipo
      </p>
      <p>
        Uno de los beneficios de este formato, es que resulta ser mucho más
        ligero por lo que se puede mandar muchos más datos bajo la misma
        velocidad de red. Otro de los beneficios asociados al formato Json es
        que resulta mucho más fácil interpretarlo con los lenguajes de
        programación, lo que permite manipularlo o trabajar con el consumiendo
        menos recursos o tiempo. sobre todo usando JavaScript
      </p>
    </AppContentTheory>
  </AppContentStructure>
)

export default React.memo(JsonC)
