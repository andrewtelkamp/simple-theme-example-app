
import React from 'react'
import AppMain from './AppMain'
import SimpleTheme from 'react-native-simple-theme'
import {
  darkTheme,
  grayTheme,
  pastelTheme,
  standardTheme,
} from './themes'

export default App = () => {
  return (
    <SimpleTheme
      additionalThemes={ [darkTheme, grayTheme, pastelTheme] }
      defaultTheme={ standardTheme }
    >
      <AppMain />
    </SimpleTheme>
  )
}
