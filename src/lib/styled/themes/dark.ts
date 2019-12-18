import { BaseTheme } from './types'

const base1Color = '#2c2d30'
const base2Color = '#1e2022'
const primaryColor = '#03C588'

const dark26Color = 'rgba(0,0,0,0.26)'
const light70Color = 'rgba(255,255,255,0.7)'
const light30Color = 'rgba(255,255,255,0.3)'
const light12Color = 'rgba(255,255,255,0.12)'
const light100Color = '#FFF'

export const darkTheme: BaseTheme = {
  colors: {
    text: light70Color,
    deemedText: light30Color,
    inverseText: light100Color,
    background: light100Color,
    alternativeBackground: light12Color,
    active: primaryColor,
    border: dark26Color
  },
  fontSize: 15,
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Fira sans', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,

  // General
  textColor: light100Color,
  uiTextColor: light70Color,
  disabledUiTextColor: light30Color,

  primaryColor: primaryColor,
  borderColor: dark26Color,
  iconColor: light30Color,
  activeIconColor: light70Color,
  backgroundColor: base1Color,
  secondaryBackgroundColor: base2Color,
  activeBackgroundColor: base2Color,
  shadow: '0 3px 5px rgba(0,0,0,0.1)',

  scrollBarTrackColor: base2Color,
  scrollBarThumbColor: light12Color,

  // SideBar
  sideBarBackgroundColor: base1Color,
  activeSideBarSecondaryTextColor: light100Color,
  sideBarTextColor: light70Color,
  sideBarSecondaryTextColor: light30Color,

  // Button
  primaryButtonLabelColor: light100Color,
  primaryButtonBackgroundColor: primaryColor,
  secondaryButtonLabelColor: light100Color,
  secondaryButtonBackgroundColor: 'transparent',

  // Input
  inputBackground: light12Color
}
