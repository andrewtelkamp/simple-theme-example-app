
import React, { memo } from 'react'
import { Text } from 'react-native'
import { theme } from 'react-native-simple-theme'


export const Title = memo(({ text }) => {
  const styles = themedStyles()

  return (
    <Text style={ styles.text }>
      { text }
    </Text>
  )
})


const themedStyles = () => ({
  text: {
    color: theme.active.colors.text.default,
    fontSize: theme.active.fontSizes.title,
    fontStyle: theme.active.fontStyles.title,
    fontWeight: theme.active.fontWeights.title,
  },
})