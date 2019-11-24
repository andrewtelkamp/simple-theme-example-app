
import { THEME_NAMES } from '../models'

const COLORS = {
  RED: '#f76c5e',
  YELLOW: '#f5dd90',
  PURPLE: '#88498f',
  WHITE: '#fff',
}

export const pastelTheme = {
  name: THEME_NAMES.PASTEL,
  styles: {
    borders: {
      button: 25,
    },
    colors: {
      background: {
        button: COLORS.YELLOW,
        screen: COLORS.RED,
      },
      text: {
        default: COLORS.WHITE,
        button: COLORS.PURPLE,
      },
    },
    fontSizes: {
      button: 12,
      title: 23,
    },
    fontStyles: {
      button: 'italic',
      title: 'italic',
    },
    fontWeights: {
      button: '500',
      title: '700'
    }
  },
}
