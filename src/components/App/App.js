import React from 'react'
import Flex from 'flex-component'

import Titlebar from 'components/Titlebar'
import style from './App.scss'

export default class App extends React.Component {
  render () {
    return (
      <Flex className={style.container} direction='column'>
        <Titlebar />
      </Flex>
    )
  }
}
