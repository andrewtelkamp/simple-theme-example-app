import {baseStyles, COLORS, THEME_NAMES} from './config';

export const grayTheme = {
  name: THEME_NAMES.GRAY,
  styles: {
    ...baseStyles,
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
    fontWeights: {
      button: '800',
      title: '300',
    },
  },
};
