import React from 'react'
import AppTableHeader from './AppTableBody'
import AppTableBody from './AppTableHeader'

export interface AppTableData {
  [key: string]: string
}

export interface AppTableProps<T extends AppTableData> {
  value: T[]
}

function appTable<T extends AppTableData>(props: AppTableProps<T>) {
  return (
    <table>
      <AppTableHeader value={props.value} />
      <AppTableBody value={props.value} />
    </table>
  )
}

export default appTable
