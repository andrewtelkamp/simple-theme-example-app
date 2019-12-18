import {baseStyles, COLORS, THEME_NAMES} from './config';

export const pastelTheme = {
  name: THEME_NAMES.PASTEL,
  styles: {
    ...baseStyles,
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
  },
};
