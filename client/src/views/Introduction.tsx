import React from 'react'
import AppContentStructure from '../components/AppContentStructure'
export interface IntroductionProps {}
interface IntroductionState {
  title: string
}
class Introduction extends React.Component<
  IntroductionProps,
  IntroductionState
> {
  constructor(props: IntroductionProps) {
    super(props)
    this.state = {
      title: 'Introducción'
    }
  }
  render() {
    return <AppContentStructure title={this.state.title} />
  }
}

export default Introduction
