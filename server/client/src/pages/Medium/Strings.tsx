import React from 'react'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import { AppPagesProps } from '../AppPages'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'

const Strings = (props: AppPagesProps) => {
  return (
    <AppContentStructure title='Strings' {...props}>
      <AppContentTheory>
        <p>
          Las cadenas de textos forman parte de las estructuras básicas que
          poseen los lenguajes de programación. JavaScript posee su estructura
          para el tratamiento de las cadenas de textos
        </p>
        <AppContentCode type='js'>
          {
            '// Declaración en JavaScript\n var texto = \'hola mundo\'; // Puede usarse comillas simples\n// Declaración Java\nString texto = "hola mundo"'
          }
        </AppContentCode>
        <p>
          Con JavaScript podemos conocer la longitud de las cadenas de textos de
          manera directa
        </p>
        <AppContentCode type='js'>
          {'var texto = "hola mundo";\ntexto.length;\n>> 10'}
        </AppContentCode>
        <p>
          JavaScript también permite ubicar una cadena de texto dentro de otra
        </p>
        <AppContentCode type='js'>
          {
            'var texto = "hola mundo";\ntexto.indexOf("mundo");\n>> 5 // Retorna -1 si no hay coincidencia'
          }
        </AppContentCode>
        <p>
          Este encuentra, la primera coincidencia. Pero también se puede ubicar
          la última coincidencia. Con el siguiente método se recorre el texto de
          fin hasta el inicio
        </p>
        <AppContentCode type='js'>
          {
            'var texto = "hola mundo hola mundo";\ntexto.lastIndexOf("mundo");\n>> 16'
          }
        </AppContentCode>
        <p>
          Ambas funciones aceptan un segundo parámetro el cual representa la
          posición por la cual comienza a buscar
        </p>
        <h3>Search</h3>
        <p>
          Existe un método muy parecido a <i>indexOf</i>, el cual se llama{' '}
          <strong>search</strong>. La diferencia principal es que en el segundo
          no se le puede decir por donde empezar.
        </p>
        <p>JavaScript, nos permite extraer secciones de la cadena de texto</p>
        <AppContentCode type='js'>
          {
            'var texto = "hola mundo";\nvar mundo = texto.slice(5,10); // mundo\nvar mundo = texto.slice(5); // extrae desde la posición indicada al final'
          }
        </AppContentCode>
        <h3>Substring</h3>
        <p>
          Existe un método adicional que logra esto mismo,{' '}
          <strong>substring</strong>, la diferencia principal es que el segundo
          no acepta posiciones negativas{' '}
        </p>
        <h3>Substr</h3>
        <p>
          El método <strong>substr</strong> permite realizar una tarea similar
          al <i>slice</i>, la diferencia es que el segundo parámetro indica el
          tamaño o la longitud del texto extraído.
        </p>
        <h3>Replace</h3>
        <p>
          El método <strong>replace</strong> permite sustituir una palabra de la
          cadena de texto por otra
        </p>
        <AppContentCode type='js'>
          {
            'var texto = "Por favor sustituye la siguiente palabra [esta]";\nvar nuevoTexto = texto.replace("[esta]","sustituido");\n// "Por favor sustituye la siguiente palabra sustituido"\n'
          }
        </AppContentCode>
        <h3>UPPERCASE y lowercase</h3>
        <p>
          Las cadenas de textos en JavaScript, poseen un método que permite que
          se le pase a mayúsculas o minúsculas
        </p>
        <AppContentCode type='js'>
          {
            'var texto = "HoLa";\nvar upper = texto.upperCase(); // HOLA\nvar lower = texto.lowerCase(); // hola'
          }
        </AppContentCode>
        <h3>Concat</h3>
        <p>
          Unir dos cadenas de textos, es algo que resulta muy útil cuando se
          quiere agregar algo de dinamismo al contenido del texto
        </p>
        <AppContentCode type='js'>
          {
            'var hola = "hola";\nvar mundo = "mundo";\nvar holaMundo = hola.concat(" ", mundo); // hola mundo\nvar holaMundo = hola + " " + mundo;'
          }
        </AppContentCode>
        <h3>Trim</h3>
        <p>
          El método <strong>trim</strong>, es muy útil ya que permite eliminar
          los espacios en blanco de una cadena de texto. Elimina los espacios en
          blanco del inicio y el final de la cadena de texto
        </p>
        <h3>Cadenas de texto como Arreglos</h3>
        <p>
          En JavaScript, las cadenas de textos tienen similitud a los arreglos,
          es decir, se puede acceder mediante los indices y usar algunos métodos
          que también poseen los arreglos
        </p>
        <AppContentCode type='js'>
          {
            'var texto = "a,b,c,d";\nvar b = texto[2]; // b\nvar letters = texto.split(","); // ["a","b","c","d"]\n'
          }
        </AppContentCode>
      </AppContentTheory>
    </AppContentStructure>
  )
}

export default Strings
