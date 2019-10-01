import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'
import AppHeader from '../../components/AppHeader/AppHeader'
import AppTable from '../../components/AppTable/AppTable'

const MathC = (props: AppPagesProps) => {
  return (
    <AppContentStructure title='Math' {...props}>
      <AppContentTheory>
        <p>
          <strong>Math</strong> es una clase que pertenece al núcleo de
          JavaScript, y me refiero a núcleo, a que esta con JavaScript siempre
        </p>
        <p>
          Esta clase posee varios métodos y atributos, establecidos para manejar
          constantes y funciones básicas para cálculos matemáticos
        </p>
        <AppContentCode type='js'>
          {`Math.PI; // retorna 3.141592653589793
Math.round(4.7); // retorna 5
Math.pow(8,2); // retorna 64`}
        </AppContentCode>
        <AppHeader level={3} text='Math.round()' />
        <p>Redondea el número al entero más cercano</p>
        <AppHeader level={3} text='Math.pow()' />
        <p>
          Retorna la potencia de x elevado a la y. Con los nuevos avances en
          JavaScript (ES5-ES6-ES7-ESNext), se posee una nueva forma para hacer
          una potencia
        </p>
        <AppContentCode type='js'>
          {`Math.pow(2,8); // retorna 256
2**8; retorna 256`}
        </AppContentCode>
        <AppHeader level={3} text='Math.sqrt()' />
        <p>Retorna la raíz cuadrada de un número</p>
        <AppContentCode type='js'>
          {'Math.sqrt(64); // retorna 8'}
        </AppContentCode>
        <AppHeader level={3} text='Otros Métodos' />
        <AppTable
          value={[
            {
              nombre: 'Math.abs(x)',
              descripcion: 'retorna el valor absoluto de x'
            },
            {
              nombre: 'Math.ceil(x)',
              descripcion: 'Redondea siempre al mayor de x'
            },
            {
              nombre: 'Math.floor(x)',
              descripcion: 'Retorna la parte entera de x'
            },
            {
              nombre: 'Math.sin(x)',
              descripcion: 'Retorna el resultado de la función sinusoidal de x'
            },
            {
              nombre: 'Math.cos(x)',
              descripcion: 'Retorna el resultado de la función cosenoidal de x'
            },
            {
              nombre: 'Math.min(...args)',
              descripcion: 'Retorna el valor mínimo de los ingresados'
            },
            {
              nombre: 'Math.max(...args)',
              descripcion: 'Retorna el valor máximo de los ingresados'
            },
            {
              nombre: 'Math.random()',
              descripcion: 'retorna un numero aleatorio entre 0 y 1, (0, 1)'
            }
          ]}
        />
        <AppHeader level={3} text='Propiedades' />
        <AppTable
          value={[
            {
              nombre: 'Math.E',
              descripcion: 'Retorna el número de Euler'
            },
            {
              nombre: 'Math.PI',
              descripcion: 'Retorna el valor de PI'
            },
            {
              nombre: 'Math.SQRT2',
              descripcion: 'Retorna el valor de la raíz cuadrada de 2'
            },
            {
              nombre: 'Math.SQRT1_2',
              descripcion: 'Retorna el valor de la raíz cuadrada de 1/2'
            },
            {
              nombre: 'Math.LN2',
              descripcion: 'Retorna el logaritmo natural de 2'
            },
            {
              nombre: 'Math.LN10',
              descripcion: 'Retorna el logaritmo natural de 10'
            },
            {
              nombre: 'Math.LOG2E',
              descripcion:
                'Retorna el logaritmo base 2 de E (constante de Euler)'
            },
            {
              nombre: 'Math.LOG10E',
              descripcion:
                'Retorna el logaritmo base 10 de E (constante de Euler)'
            }
          ]}
        />
      </AppContentTheory>
    </AppContentStructure>
  )
}

export default MathC
