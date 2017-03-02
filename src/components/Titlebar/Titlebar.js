import React from 'react'
import Flex from 'flex-component'
import { Titlebar } from './Titlebar.scss'

export default props => (
  <Flex
    className={Titlebar}
    alignItems='center'
    justifyContent='center'
  >
    {props.title}
  </Flex>
)
