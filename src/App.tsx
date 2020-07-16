import React from 'react'
import { render } from 'react-dom'

import GlobalStyle from './styles/GlobalStyle'

import Canvas from './components/Canvas'
import CommandBar from './components/CommandBar'
import StatusBar from './components/StatusBar'
import Bars from './components/Bars'

import { CommandProvider } from './providers/Command'

const mainElement = document.createElement('div')
mainElement.id = 'root'
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <CommandProvider>
        <Canvas />
        <Bars>
          <StatusBar />
          <CommandBar />
        </Bars>
      </CommandProvider>
      <GlobalStyle />
    </>
  )
}

render(<App />, mainElement)
