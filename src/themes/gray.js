
import { THEME_NAMES } from '../models'

const COLORS = {
  DARK_GRAY: '#ccc',
  GRAY: '#222',
}

export const grayTheme = {
  name: THEME_NAMES.GRAY,
  styles: {
    borders: {
      button: 8,
    },
    colors: {
      background: {
        button: COLORS.GRAY,
        screen: COLORS.DARK_GRAY,
      },
      text: {
        default: COLORS.GRAY,
        button: COLORS.DARK_GRAY,
      },
    },
    fontSizes: {
      button: 12,
      title: 18,
    },
    fontStyles: {
      button: 'normal',
      title: 'normal',
    },
    fontWeights: {
      button: '800',
      title: '300'
    }
  },
}
