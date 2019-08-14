import React from 'react'
import { AppPagesProps } from '../AppPages.d'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'

const SyntaxPage = (props: AppPagesProps) => {
  return (
    <AppContentStructure title='Sintaxis' {...props}>
      <AppContentTheory title='Números'>
        <p>
          Los números son representados de manera dinámica. JavaScript no posee
          separación de los tipos de números (int, long, float, double), como es
          el caso de C/C++ o Java
        </p>
        <AppContentCode type='js'>
          {'var a = 2;\nvar b = 3.2;\nvar c = 3.3333333333333;'}
        </AppContentCode>
      </AppContentTheory>
      <AppContentTheory title='Text'>
        <p>
          Las cadenas de texto, se representan entre comillas dobles (&quot) o
          comillas simples (&apos). No existe un tipo <i>char</i> como en
          lenguajes como C/C++ o Java, en donde las comillas simples son usadas
          para este tipo de elementos
        </p>
        <p>
          Por convención se usan las comillas simples para representar las
          cadenas de textos
        </p>
        <AppContentCode type='js'>
          {`var a = ${'hola mundo'};// Recomendado por convención\nvar b = "hola mundo";`}
        </AppContentCode>
      </AppContentTheory>
      <AppContentTheory title='Variables'>
        <p>
          Las variables son espacios de memoria, que utiliza un programa para
          guardar de manera momentánea un valor o una referencia (objetos y
          arreglos)
        </p>
        <p>
          Para declarar una variable se utiliza la palabra clave{' '}
          <strong>var</strong>. Esto permite crear una variable de manera local.
          Si se quiere una variable global se puede crear sin el uso de ninguna
          palabra clave, esto es una mala práctica, siempre se debe tener claro
          el alcance o contexto de la variable
        </p>
        <AppContentCode type='js'>
          {`var a = ${'hola mundo'};\nvar b = 52;\nc = 'hola'; // no recomendado`}
        </AppContentCode>
      </AppContentTheory>
      <AppContentTheory title='Operadores'>
        <p>Los operadores son parecidos a los usados en C/C++ o Java</p>
        <ul>
          Matemáticos:
          <li>Suma (+)</li>
          <li>Resta (-)</li>
          <li>Multiplicación (*)</li>
          <li>División (/)</li>
        </ul>
        <ul>
          Lógicos:
          <li>
            And ({'&'} o {'&&'})
          </li>
          <li>Or ( | o || )</li>
          <li>Not (!)</li>
          <li>Xor (^)</li>
        </ul>
        <ul>
          Otros:
          <li>Asignación (=)</li>
          <li>Comparar igualdad (== o ===)</li>
          <li>Comparar desigualdad (!= o !==)</li>
          <li>
            Mayor que ({'>'}) y menor que ({'<'})
          </li>
          <li>
            Mayor igual que ({'>='})y menor igual que ({'<='})
          </li>
        </ul>
      </AppContentTheory>
      <AppContentTheory title='Palabras Claves'>
        <p>
          JavaScript al igual que los demás lenguajes de programación poseen
          palabras claves que hacen posible la interpretación del archivo a
          código. Las palabras claver se irán aprendiendo más adelante por su
          uso, pero entre ellas tenemos las siguientes
        </p>
        <table>
          <tbody>
            <tr>
              <td>var</td>
              <td>let</td>
              <td>const</td>
              <td>for</td>
              <td>if</td>
              <td>async</td>
              <td>await</td>
            </tr>
            <tr>
              <td>class</td>
              <td>extends</td>
              <td>function</td>
              <td>abstract</td>
              <td>boolean</td>
              <td>number</td>
              <td>try</td>
            </tr>
            <tr>
              <td>catch</td>
              <td>break</td>
              <td>switch</td>
              <td>typeof</td>
              <td>instanceof</td>
              <td>interface</td>
              <td>int</td>
            </tr>
            <tr>
              <td>long</td>
              <td>null</td>
              <td>undefined</td>
              <td>export</td>
              <td>double</td>
              <td>else</td>
              <td>return</td>
            </tr>
            <tr>
              <td>short</td>
              <td>static</td>
              <td>this</td>
              <td>super</td>
              <td>package</td>
              <td>new</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </AppContentTheory>
      <AppContentTheory title='JavaScript y Camel Case'>
        <p>
          Por convención los lenguajes de programación tienen maneras de
          escribir o nombrar las variables, funciones, paquetes o módulos
        </p>
        <p>
          Existen varias convenciones para diferentes lenguajes: CamelCase,
          lowerCamelCase, hyp-hens, under_scores, etc. Para el caso de
          Javascript se utiliza lowerCamelCases
        </p>
      </AppContentTheory>
    </AppContentStructure>
  )
}
export default React.memo(SyntaxPage, () => true)
