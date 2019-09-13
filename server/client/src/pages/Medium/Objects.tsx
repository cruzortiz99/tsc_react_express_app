import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'
import AppHeader from '../../components/AppHeader/AppHeader'

const Objects = (props: AppPagesProps) => {
  return (
    <AppContentStructure title='Objectos' {...props}>
      <AppContentTheory>
        <p>
          Los objectos son parte importante de los lenguajes de programación,
          conforma junto con los arreglos y los tipos ya vistos, las estructuras
          de datos. Los objectos son parte de muchos de los lenguajes de
          programación, comenzando con C/C++ hasta Go o Dart(lenguajes de
          programación desarrollados por Google en los 20xx)
        </p>
        <p>
          Los Objectos permiten desarrollar las aplicaciones, pesando en
          características y funciones de un elemento en particular. Por ejemplo,
          supongamos queremos una aplicación que debe representar un carro,
          junto con sus funcionalidades (avanzar, acelerar, frenar, detener,
          retroceder, etc)
        </p>
        <AppContentCode type='js'>
          {`const car = {\n name: "Cherokee",\n model: "Grand",\n date: 1996,\n color: "white"\n};
console.log(car.name, car.model, car.date, car.color);
>> "Cherokee", "Grand", 1996, "white"`}
        </AppContentCode>
        <p>
          Los objectos permiten encapsular y modularizar las aplicaciones para
          estas puedan crecer tanto en funcionalidades como en complejidad de
          los requisitos
        </p>
        <AppContentCode type='js'>
          {`const car = {\n name: "Cherokee",\n model: "Grand",\n date: 1996,\n color: "white"\n avanza: function () {...},\n acelerar: function () {...},\n frenar: function () {...},\n detener: function () {...},\n retroceder: function () {...}\n}
car.acelerar();
car.frenar();
car.retroceder();
          `}
        </AppContentCode>
        <p>
          Crear objetos en JavaScript es mucho más rápido o sencillo que otros
          lenguajes como por ejemplo Java, C/C++, en estos hay que declarar una
          clase antes de poder crear un objeto. Una clase, es solo un contrato
          que posee el objeto, sobre las características o funcionalidades
          mínimas que posee. Las clases en JavaScript serán abordadas más
          adelante junto a la programación orientada a objetos (OOP)
        </p>
        <p>
          Para acceder a una propiedad de un objeto en JavaScript, existen dos
          formas
        </p>
        <AppContentCode type='js'>
          {
            '// Usando la notación con punto\nconsole.log(car.name); // "Cherokee\n// Usando texto como indice\nconsole.log(car["model"]); // "Grand"'
          }
        </AppContentCode>
        <AppHeader level={3} text='Palabra clave This' />
        <p>
          Dentro de un método de una función la palabra clave{' '}
          <strong>this</strong> permite tener acceso a las características del
          objeto actual
        </p>
        <AppContentCode type='js'>
          {
            'const car = {\n name: "Cherokee",\n model: "Grand",\n speed: 0,\n acelerar: function (value) {\n  this.speed+=value;\n }\n}\ncar.acelerar(10);\ncar.acelerar(10);\nconsole.log(car.speed);\n >> 20'
          }
        </AppContentCode>
        <AppHeader level={3} text='Dificultades' />
        <p>
          La mayor dificultad con esta manera de declarar los objetos en
          JavaScript, es la escalabilidad de las aplicación. De esta manera es
          muy difícil hacer que la aplicación crezca o se modifique porque
          habría que modificar uno a uno cada objeto
        </p>
        <p>
          Adicional, repite mucho código, supongamos que ahora queremos un carro
          con otro nombre o modelo. Tendríamos que crea una copia completa del
          mismo código solo para modificar una parte ¿cierto?
        </p>
        <p>
          Bueno, lo hemos mencionado anteriormente, pero para ello se utilizan
          las clases y se profundiza con la OOP. En conjunto, nos permite
          reutilizar mucho código, mejorar el diseño para realizar aplicaciones
          muy complejas y mejorar en gran medida la documentación y
          mantenimiento de las mismas
        </p>
      </AppContentTheory>
    </AppContentStructure>
  )
}

export default Objects
