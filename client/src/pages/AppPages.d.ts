import { RouteComponentProps } from 'react-router'

export interface AppPagesProps extends RouteComponentProps {
  nextRoute?: string
  prevRoute?: string
}
