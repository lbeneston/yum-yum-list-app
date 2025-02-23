import { Text, type TextProps } from 'react-native'
import { useThemeColor } from '@/hooks/useThemeColor'

export type ThemedTextProps = TextProps & {
  lightColor?: string
  darkColor?: string
}

export const ThemedText = ({
  style,
  lightColor,
  darkColor,
  ...rest
}: ThemedTextProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')
  return <Text style={[{ color }, style]} {...rest} />
}
