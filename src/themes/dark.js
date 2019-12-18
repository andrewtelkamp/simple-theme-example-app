import {baseStyles, COLORS, THEME_NAMES} from './config';

export const darkTheme = {
  name: THEME_NAMES.DARK,
  styles: {
    ...baseStyles,
    colors: {
      background: {
        ...baseStyles.colors.background,
        screen: COLORS.BLACK,
      },
      text: {
        ...baseStyles.colors.text,
        default: COLORS.WHITE,
      },
    },
  },
};
