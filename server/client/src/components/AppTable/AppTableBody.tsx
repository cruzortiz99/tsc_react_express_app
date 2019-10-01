import React from 'react'
import { AppTableProps, AppTableData } from './AppTable'

function appBody<T extends AppTableData>(props: AppTableProps<T>) {
  return (
    <tbody>
      {props.value.map((item, key) => {
        const keys = Object.keys(item)
        return (
          <tr key={key}>
            {keys.map((value, key2) => {
              return <td key={key2}>{item[value]}</td>
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

export default appBody
