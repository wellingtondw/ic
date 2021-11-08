export default {
  border: {
    radius: '0.625rem'
  },
  font: {
    main: {
      family: "'Montserrat', sans-serif",
      normal: 400,
      bold: 700
    },
    secondary: {
      family: "'Lato', sans-serif",
      bold: 700
    },
    sizes: {
      xsmall: '0.75rem',
      small: '0.875rem',
      normal: '1rem',
      medium: '1.125rem',
      large: '2.25rem',
      xlarge: '4.5rem'
    }
  },
  colors: {
    primary: '#2C97D1',
    black: '#2A2A2A',
    blackBg: '#2B2B2B',
    white: '#FFFFFF',
    yellow: '#FBFE63'
  },
  spacings: {
    xxxsmall: '0.25rem', // 4px
    xxsmall: '0.5rem', //8px
    xsmall: '1rem', //16px
    small: '1.5rem', //24px
    medium: '2rem', // 32px
    large: '2.5rem', //40px
    xlarge: '3rem', //48px
    xxlarge: '3.5rem' //56px
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
