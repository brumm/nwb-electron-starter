import React from 'react'
import styled from 'styled-components'

import Titlebar from 'components/Titlebar'

const Container = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#ECECEC',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
  color: '#333',
})

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Titlebar>My App</Titlebar>
      </Container>
    )
  }
}
