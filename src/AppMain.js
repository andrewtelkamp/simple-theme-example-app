
import React, { memo } from 'react'
import { View } from 'react-native'
import { theme } from 'react-native-simple-theme'

import { THEME_NAMES } from './models'
import { Button } from './Button'
import { Title } from './Title'



export default AppMain = memo(() => {
  const styles = themedStyles()
  const activeThemeName = theme.getActiveThemeName()

  return (
    <View style={ styles.screen }>
      <View style={ styles.titleWrap }>
        <Title text={ activeThemeName } />
      </View>

      <Button
        title="Default Theme"
        onPress={ () => theme.setActiveTheme(THEME_NAMES.STANDARD) }
      />

      <Button
        title="Dark Theme"
        onPress={ () => theme.setActiveTheme(THEME_NAMES.DARK) }
      />

      <Button
        title="Gray Theme"
        onPress={ () => theme.setActiveTheme(THEME_NAMES.GRAY) }
      />

      <Button
        title="Pastel Theme"
        onPress={ () => theme.setActiveTheme(THEME_NAMES.PASTEL) }
      />

    </View>
  )
})


const themedStyles = () => ({
  screen: {
    alignItems: 'center',
    backgroundColor: theme.active.colors.background.screen,
    justifyContent: 'center',
    height: '100%',
    padding: 20,
    width: '100%',
  },
  titleWrap: {
    paddingBottom: 100,
  }
})
