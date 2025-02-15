/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const black = '#151718'
const blue = '#0A7EA4'
const darkBlue = '#1D3D47'
const gray = '#687076'
const lightBlue = '#A1CEDC'
const lightGray = '#9BA1A6'
const white = '#FFFFFF'

export const Colors = {
  light: {
    text: black,
    background: white,
    tint: blue,
    icon: gray,
    tabIconDefault: gray,
    tabIconSelected: blue,
    header: lightBlue,
  },
  dark: {
    text: white,
    background: black,
    tint: white,
    icon: lightGray,
    tabIconDefault: lightGray,
    tabIconSelected: white,
    header: darkBlue,
  },
}
