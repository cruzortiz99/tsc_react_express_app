import React from 'react'
import { AppPagesProps } from '../AppPages'
import AppContentStructure from '../../components/AppContentStructure/AppContentStructure'
import AppContentTheory from '../../components/AppContentTheory/AppContentTheory'
import AppContentCode from '../../components/AppContentCode/AppContentCode'

export default (props: AppPagesProps) => {
  return (
    <AppContentStructure title='Alcance de las variables' {...props}>
      <AppContentTheory>
        <p>
          Los alcances en la variables son fundamentales, ya que nos permiten
          entender mejor el flujo de la aplicación y sobretodo entender y
          mejorar el manejo de memoria.
        </p>
        <p>
          Los alcances pueden ser de tipo global o local. Las variables locales,
          viven dentro de un determinado espectro, por ejemplo, en el caso de
          una función, al declarar una variable dentro de la misma, esta solo
          existe dentro de los limites de la función. El espectro global,
          refiere a las variables que se pueden acceder en toda la aplicación en
          todo momento y su espectro es exactamente ese, la aplicación.
        </p>
        <p>
          No se recomienda asociar las variables al espectro global, debido a
          que eso es memoria que la aplicación necesita siempre para su trabajo.
          Mientras más variables establezcamos de manera global, más memoria
          constante requerirá la aplicación
        </p>
      </AppContentTheory>
      <AppContentCode type='js'>
        {'const a = 2; // global\nfunction b () {\n let c = 25; // local\n}'}
      </AppContentCode>
    </AppContentStructure>
  )
}
