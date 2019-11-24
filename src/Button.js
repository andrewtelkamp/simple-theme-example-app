
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { theme } from 'react-native-simple-theme'


export const Button = ({ onPress, title }) => {
  const styles = themedStyles()

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={ onPress }
        style={ styles.button }
      >
        <Text style={ styles.text }>{ title }</Text>
      </TouchableOpacity>
    </View>
  )
}


const themedStyles = () => ({
  button: {
    alignItems: 'center',
    backgroundColor: theme.active.colors.background.button,
    borderRadius: theme.active.borders.button,
    height: 50,
    justifyContent: 'center',
    marginBottom: 15,
    width: '100%',
  },
  text: {
    color: theme.active.colors.text.button,
    fontSize: theme.active.fontSizes.button,
    fontStyle: theme.active.fontStyles.button,
    fontWeight: theme.active.fontWeights.button,
  },
})
