import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'
import AppHeader from '../../components/AppHeader/AppHeader'

const Arrays = (props: AppPagesProps) => {
  return (
    <AppContentStructure title='Arreglos' {...props}>
      <AppContentTheory>
        <p>
          Los arreglos son un tipo especial de variable, permite crear matrices
          para almacenar múltiples valores
        </p>
        <AppContentCode type='js'>
          {
            'var x = [1,2,3]; // Arreglo de números\nvar y = [1, "hola", new Date()]; // Arreglo de cualquier elemento'
          }
        </AppContentCode>
        <p>
          A diferencia de los lenguajes con tipado estático, JavaScript puede
          mantener en un arreglo de manera sencilla. En Java por ejemplo, saber
          manejar la clase Collection, Set, List y Array ayuda a crear este tipo
          de estructuras. Esto se debe a que JavaScript es de tipado dinámico
        </p>
        <p>
          Cambiar algún elemento en el arreglo es tan sencillo como asignar una
          variable
        </p>
        <AppContentCode type='js'>
          {'var x = [5,2,3];\nx[0] = 32;\nconsole.log(x);\n>> [32, 2, 3]'}
        </AppContentCode>
        <p>
          Como cualquier elemento en JavaScript, los arreglos también provienen
          de la clase objectos
        </p>
        <AppHeader level={3} text='Longitud del arreglo'></AppHeader>
        <p>
          Los arreglos, en JavaScript proveen mucha información y métodos que se
          pueden usar. a longitud es uno de los datos que podemos obtener del
          arreglo
        </p>
        <AppContentCode type='js'>
          {'var x = [1,2,3,4];\nconsole.log(x.length);\n>> 4'}
        </AppContentCode>
        <AppHeader level={3} text='Recorrer el arreglo'></AppHeader>
        <p>
          Recorrer un arreglo se puede realizar a través de las funciones o
          flujos de trabajos vistos en el básico (fors, while y funciones
          recursivas). Sin embargo, JavaScript se actualiza con el tiempo, y en
          la actualización a ES5, los arreglos poseen nuevos métodos, entre
          ellos existe <strong>foreach</strong>, que representa un ciclo
          <i> for </i>internamente
        </p>
        <AppContentCode type='js'>
          {
            'var x = [1, 2, 3, 4];\nx.foreach((item, key, array)=>{\n  console.log(item, key, array);\n})\n// Intentalo!'
          }
        </AppContentCode>
        <AppHeader level={3} text='Agregar elemento al arreglo'></AppHeader>
        <p>
          Agregar elementos en JavaScript es bastante simple, hay dos maneras de
          hacerlo, sin embargo, mi recomendación es siempre usar el método del
          arreglo
        </p>
        <AppContentCode type='js'>
          {
            'var x = [1, 2, 3, 4];\nx[x.length] = 5;// [1, 2, 3, 4, 5]\nx.push(6);// [1, 2, 3, 4, 5, 6]'
          }
        </AppContentCode>
        <AppHeader level={3} text='Reconocer un arreglo'></AppHeader>
        <p>
          Reconocer un arreglo en JavaScript es algo curioso ya que usar{' '}
          <strong>typeof</strong> sobre un arreglo, en realidad se obtiene un{' '}
          <strong>object</strong>. Para esto usamos un método que en realidad
          está directamente ligado al tipo que estamos creando
        </p>
        <AppContentCode type='js'>
          {
            'var x = [1, 2, 3];\nconsole.log(typeof x);\n>> "object"\nArray.isArray(x);\n>> true'
          }
        </AppContentCode>
        <p>
          Existe otra forma de hacerlo, que es usando la palabra clave{' '}
          <strong>instanceof</strong>
        </p>
        <AppContentCode type='js'>
          {'var x = [1, 2, 3];\nx instanceof Array;\n>> true'}
        </AppContentCode>
        <AppHeader level={3} text='Método toString'></AppHeader>
        <AppHeader level={3} text='Método pop y push'></AppHeader>
        <AppHeader level={3} text='Método shift y unshift'></AppHeader>
        <AppHeader level={3} text='Método splice y concat'></AppHeader>
        <AppHeader level={3} text='Método slice y join'></AppHeader>
        <AppHeader level={3} text='Método sort y reverse'></AppHeader>
        <AppHeader level={3} text='Método map, filter y reduce'></AppHeader>
        <AppHeader level={3} text='Método every, some'></AppHeader>
        <AppHeader
          level={3}
          text='Método indexOf, lastIndexOf, find, findIndex'
        ></AppHeader>
      </AppContentTheory>
    </AppContentStructure>
  )
}

export default Arrays
