import {THEME_NAMES} from '../models';

const COLORS = {
  BLACK: '#000',
  PURPLE: '#5959ff',
  WHITE: '#fff',
};

export const standardTheme = {
  name: THEME_NAMES.STANDARD,
  styles: {
    borders: {
      button: 0,
    },
    colors: {
      background: {
        button: COLORS.PURPLE,
        screen: COLORS.WHITE,
      },
      text: {
        default: COLORS.BLACK,
        button: COLORS.WHITE,
      },
    },
    fontSizes: {
      button: 16,
      title: 30,
    },
    fontStyles: {
      button: 'normal',
      title: 'normal',
    },
    fontWeights: {
      button: '400',
      title: '800',
    },
  },
};
