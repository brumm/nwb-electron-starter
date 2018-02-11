import React from 'react'
import glamorous from 'glamorous'

import Titlebar from 'components/Titlebar'

const Container = glamorous.div({
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
