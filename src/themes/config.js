export const THEME_NAMES = {
  DARK: 'dark',
  GRAY: 'gray',
  STANDARD: 'standard',
  PASTEL: 'pastel',
};

export const COLORS = {
  BLACK: '#000',
  DARK_GRAY: '#ccc',
  GRAY: '#222',
  PURPLE: '#5959ff',
  RED: '#f76c5e',
  WHITE: '#fff',
  YELLOW: '#f5dd90',
}

export const baseStyles = {
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
    title: '800'
  }
}