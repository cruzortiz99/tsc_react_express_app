import React from 'react'
import { AppTableProps, AppTableData } from './AppTable'

function appHeader<T extends AppTableData>(props: AppTableProps<T>) {
  const keys = Object.keys(props.value[0])
  return (
    <thead>
      <tr>
        {keys.map((item, key) => {
          return <th key={key}>{item.toUpperCase()}</th>
        })}
      </tr>
    </thead>
  )
}

export default appHeader
