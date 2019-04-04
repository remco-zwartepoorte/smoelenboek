const breakpoints = {
  mobile: 400,
  phablet: 550,
  tablet: 768,
  desktop: 1000,
  hd: 1300,
}

const colors = {
  primary: 'hsl(197, 33%, 54%)',
  primaryLight: 'hsl(197, 33%, 80%)',
  primaryDark: 'hsl(197, 33%, 48%)',
  white: '#ffffff',
  darkest: '#4d4058',
  text: 'hsl(0, 0%, 20%)',
  textMild: 'hsl(0, 0%, 33%)',
  textLight: 'hsl(0, 0%, 46%)',
  textLighter: 'hsl(0, 0%, 67%)',
  bgWhite: '#ffffff',
  bgLight: '#f9f9f6',
  bgGrey: '#333333',
  danger: 'hsl(0, 100%, 65%)',
  button: {
    white: 'hsl(0, 0%, 100%)',
    grey: 'hsl(0, 0%, 57%)',
    greyLight: 'hsl(0, 0%, 77%)',
    greyDark: 'hsl(0, 0%, 46%)',
    primary: 'hsl(197, 33%, 54%)',
    primaryLight: 'hsl(197, 33%, 80%)',
    primaryDark: 'hsl(197, 33%, 48%)',
    danger: 'hsl(0, 100%, 65%)',
    dangerDark: 'hsl(0, 100%, 55%)',
  },
}

const polygons = {
  card: 'polygon(0% 0%, 98% 4.99%, 99.26% 96.64%, 0% 100%)',
  header: 'polygon(12.42% 18.66%,79.44% 22.32%,79.87% 76.36%,12.62% 79.34%)',
  detail: 'polygon(0% 0%, 97.58% 1.66%, 98.49% 98.36%, 0% 100%)',
}

const radius = '3px'

const theme = {
  breakpoints,
  colors,
  polygons,
  radius,
}

export default theme
